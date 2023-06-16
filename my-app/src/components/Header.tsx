import React from "react";

import ResizableColumn from "./ResizableColumn";

interface HeaderProps {
  columnWidths: any;
  setColumnWidth: any;
  columns: any;
}

const Header = (props: HeaderProps) => {
  const { columnWidths, setColumnWidth, columns } = props;

  const handleResize = (index: any) => (width: any) => {
    if (
      index !== columnWidths.length - 1 &&
      columnWidths[index] + width > 100 &&
      columnWidths[index + 1] - width > 100
    )
      setColumnWidth({ index, width });
  };

  return (
    <div
      id="header"
      className="header-container"
      style={{
        width: `${columnWidths.reduce(
          (acc: any, width: any) => acc + width,
          0
        )}`,
      }}
    >
      {columns &&
        columns.map((item: any, index: any) => (
          <div style={{ width: columnWidths[index] }}>
            <ResizableColumn
              columWidth={columnWidths[index]}
              onResize={handleResize(index)}
            >
              {item}
            </ResizableColumn>
          </div>
        ))}
    </div>
  );
};

export default Header;
