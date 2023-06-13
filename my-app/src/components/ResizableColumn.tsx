import React, { useCallback, useEffect, useRef, useState } from "react";

/* 
  1. truyen column co the resizable
*/

interface ResizableColumnProps {
  children: any;
  onResize: any;
}

const ResizableColumn = (props: ResizableColumnProps) => {
  const { children, onResize } = props;

  const [width, setWidth] = useState<any>(100);
  const isResizing = useRef(false);
  const cellRef = useRef<any>(null);

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    isResizing.current = true;
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isResizing.current && cellRef.current) {
        event.preventDefault();
        event.stopPropagation();
        const newWidth = width + event.movementX;
        setWidth(newWidth);
        onResize(newWidth);
      }
    },
    [width, onResize]
  );

  const handleMouseUp = useCallback(
    (event: MouseEvent) => {
      isResizing.current = false;
      // if (cellRef.current) {
      //   // const cellWidth = cellRef.current.getBoundingClientRect().width;
      // }
      // onResize(width);
    },
    [width, onResize]
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="resizable-header-cell" style={{ width }} ref={cellRef}>
      <>
        {children}
        <div className="resizing" onMouseDown={handleMouseDown}></div>
      </>
    </div>
  );
};

export default ResizableColumn;
