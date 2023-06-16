import React, { useCallback, useEffect, useRef, useState } from "react";

interface ResizableHeightProps {
  children?: any;
  onResize: any;
  tableHeight?: any;
}

const ResizableHeight = (props: ResizableHeightProps) => {
  const { children, onResize, tableHeight } = props;

  const [height, setHeight] = useState<any>(30);
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
        const newHeight = height + event.movementY;
        setHeight(newHeight);
        onResize(event.movementY);
      }
    },
    [height, onResize]
  );

  const handleMouseUp = useCallback((event: MouseEvent) => {
    isResizing.current = false;
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      className="resizable-height"
      style={{ height: tableHeight }}
      ref={cellRef}
    >
      <>
        {children}
        <div className="resizing-height" onMouseDown={handleMouseDown}>
          X
        </div>
      </>
    </div>
  );
};

export default ResizableHeight;
