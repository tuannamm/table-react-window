import React from "react";

import ResizableColumn from "./ResizableColumn";

interface HeaderProps {
  columnWidths: any;
  onResize: any;
  columns: any;
  width: any;
  height: any;
}

const Header = (props: HeaderProps) => {
  const { columnWidths, onResize, columns, width, height } = props;

  const handleResize = (index: any) => (width: any) => {
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
      {columns &&
        columns.map((item: any, index: any) => (
          <div style={{ width: columnWidths[index] }}>
            <ResizableColumn
              columWidth={columnWidths[index]} // chiều rộng của column tương ứng với reszeableColumn
              onResize={handleResize(index)} // hàm được gọi khi resize
              height={height + 40} // chiều cao của resizeableColumn (do có thêm 1 dòng header nên + 40)
            >
              {item}
            </ResizableColumn>
          </div>
        ))}
    </div>
  );
};

export default Header;
