import React from "react";

import ResizableColumn from "../ResizableColumn";

interface HeaderProps {
  columnWidths: number[];
  onResize: any;
  columns: string[];
  width: number;
  height: number;
  enableResizableWidth: boolean;
}

const Header = (props: HeaderProps) => {
  const {
    columnWidths,
    onResize,
    columns,
    width,
    height,
    enableResizableWidth,
  } = props;

  const handleResize = (index: number) => (width: number) => {
    // hàm nhận index của column đang resize và width thay đổi của column đó
    if (
      index !== columnWidths.length - 1 &&
      columnWidths[index] + width > 100 &&
      columnWidths[index + 1] - width > 100
    )
      // nếu column đang resize là column cuối cùng thì không cho resize nữa
      onResize({ index, width });
  };

  return (
    <div
      className="header-container"
      style={{
        width, // width của header bằng tổng width của tất cả column
      }}
    >
      {columns.map((item: string, index: number) => (
        <div style={{ width: columnWidths[index] }}>
          {enableResizableWidth ? (
            <ResizableColumn
              columWidth={columnWidths[index]} // chiều rộng của column tương ứng với reszeableColumn
              onResize={handleResize(index)} // hàm được gọi khi resize
              height={height + 40} // chiều cao của resizeableColumn (do có thêm 1 dòng header nên + 40)
            >
              {item}
            </ResizableColumn>
          ) : (
            <div style={{ width: columnWidths[index] }} className="header">
              {item}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Header;
