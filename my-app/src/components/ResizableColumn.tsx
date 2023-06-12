import React, { useRef, useState } from 'react'


/* 
  1. truyen column co the resizable
*/

interface ResizableColumnProps {
  children: any;
  onResize: any;
}

const ResizableColumn = (props: ResizableColumnProps) => {
  const {children, onResize} = props;

  const [width, setWidth] = useState<any>(100);
  const [isResizing, setIsResizing] = useState<any>(false);
  const [startX, setStartX] = useState<any>(0);
  const cellRef = useRef<any>(null);

  const handleMouseDown = (event: any) => {  
    setIsResizing(true);
    setStartX(event.clientX);
    console.log('mousedown')
  }

  const handleMouseMove = (event: any) => {  
     if (isResizing && cellRef.current) {
      const newWidth = width + event.clientX - startX;
      setWidth(newWidth);
      setStartX(event.clientX);
      onResize(newWidth);
    }
  }

  const handleMouseUp = (event: any) => {  
    setIsResizing(false);
    if (cellRef.current) {
      const cellWidth = cellRef.current.getBoundingClientRect().width;
      onResize(cellWidth);
    } 
    console.log('mouseup')
  }
  
  return (
    <div 
      className="resizable-header-cell"
      style={{ width }}
      ref={cellRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}>
        {children}
    </div>
  )
}

export default ResizableColumn;