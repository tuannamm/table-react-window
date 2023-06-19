import React, { useCallback, useEffect, useRef, useState } from "react";

/* 
  1. truyen column co the resizable
*/

interface ResizableColumnProps {
  children: any;
  onResize: any;
  columWidth: number;
  height: any;
}

const ResizableColumn = (props: ResizableColumnProps) => {
  const { children, onResize, columWidth, height } = props;

  const [width, setWidth] = useState<any>(columWidth);
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
        // momentX: chieu rong cua chuot khi di chuyen
        const newWidth = width + event.movementX;
        setWidth(newWidth); // set lai chieu rong
        // truyền phần chiều rộng mới vào hàm onResize lift state up lên component cha xử lý
        onResize(event.movementX);
      }
    },
    [width, onResize]
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
      className="resizable-header-cell"
      style={{ width: columWidth }}
      ref={cellRef}
    >
      <>
        {children}
        <div
          className="resizing"
          style={{ height }}
          onMouseDown={handleMouseDown}
        ></div>
      </>
    </div>
  );
};

export default ResizableColumn;
