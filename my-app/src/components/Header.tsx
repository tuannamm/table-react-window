import React from "react";

import ResizableColumn from "./ResizableColumn";

interface HeaderProps {
  columnWidths: any;
  setColumnWidth: any;
}

const Header = (props: HeaderProps) => {
  const { columnWidths, setColumnWidth } = props;

  const handleResize = (index: any) => (width: any) => {
    setColumnWidth(index, columnWidths[index] + width);
    setColumnWidth(index + 1, columnWidths[index + 1] - width);

    // setColumnWidth(index, columnWidths[index] + width);
    // setColumnWidth(index + 1, columnWidths[index + 1] - width);

    // if (width > 0) {
    //   setColumnWidth(index, columnWidths[index] + width);
    //   setColumnWidth(index + 1, columnWidths[index + 1] - width);
    // }

    // if (width <= 0 && index < 0) {
    //   setColumnWidth(index, columnWidths[index] + width);
    //   setColumnWidth(index, columnWidths[index - 1] - width);
    // }

    // if (width < 0) {
    //   setColumnWidth(index, columnWidths[index] - width);
    //   setColumnWidth(index, columnWidths[index - 1] + width);
    // }

    // setColumnWidth(index, columnWidths[index + 1] - width);
    // if (index === columnWidths.length - 1) {
    //   console.log("last column");
    // }
  };

  return (
    <div
      className="header-container"
      style={{
        width: `${columnWidths.reduce(
          (acc: any, width: any) => acc + width,
          0
        )}`,
      }}
    >
      <div style={{ width: columnWidths[0] }}>
        <ResizableColumn
          columWidth={columnWidths[0]}
          onResize={handleResize(0)}
        >
          ID
        </ResizableColumn>
      </div>
      <div style={{ width: columnWidths[1] }}>
        <ResizableColumn
          columWidth={columnWidths[1]}
          onResize={handleResize(1)}
        >
          Name
        </ResizableColumn>
      </div>
      <div style={{ width: columnWidths[2] }}>
        <ResizableColumn
          columWidth={columnWidths[2]}
          onResize={handleResize(2)}
        >
          Age
        </ResizableColumn>
      </div>
    </div>
  );
};

export default Header;
