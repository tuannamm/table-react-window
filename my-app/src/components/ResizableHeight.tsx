import React, { useCallback, useEffect, useRef, useState } from "react";

interface ResizableHeightProps {
  onResize: any;
  width: number;
}

const ResizableHeight = (props: ResizableHeightProps) => {
  const { onResize, width } = props;

  const [height, setHeight] = useState<number>(30);
  // useRef: giữ lại giá trị của biến khi component re-render
  const isResizing = useRef(false);
  const cellRef = useRef<any>(null);

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault(); // ngan chan su kien mac dinh
    event.stopPropagation(); // ngan chan su kien lan truyen
    isResizing.current = true;
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isResizing.current && cellRef.current) {
        event.preventDefault();
        event.stopPropagation();
        // movementY: chiều cao của chuột mỗi khi di chuyển
        const newHeight = height + event.movementY;
        setHeight(newHeight); // set lai chieu cao
        // truyền phần chiều cao mới vào hàm onResize lift state up lên component cha xử lý
        onResize(event.movementY);
      }
    },
    [height, onResize]
  );

  const handleMouseUp = useCallback((event: MouseEvent) => {
    isResizing.current = false;
  }, []);

  // DOM listen mỗi khi mouseup và mousedown
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      // remove event listener khi component unmount
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="resizable-height" style={{ width }} ref={cellRef}>
      <>
        <div className="resizing-height" onMouseDown={handleMouseDown}>
          ...
        </div>
      </>
    </div>
  );
};

export default ResizableHeight;
