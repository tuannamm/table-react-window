import React from "react";

import ResizableColumn from "./ResizableColumn";

interface HeaderProps {
  columnWidths: any;
  setColumnWidth: any;
}

const Header = (props: HeaderProps) => {
  const { columnWidths, setColumnWidth } = props;

  const handleResize = (index: any) => (width: any) => {
    setColumnWidth(index, width);
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
        <ResizableColumn onResize={handleResize(0)}>ID</ResizableColumn>
      </div>
      <div style={{ width: columnWidths[1] }}>
        <ResizableColumn onResize={handleResize(1)}>Name</ResizableColumn>
      </div>
      <div style={{ width: columnWidths[2] }}>
        <ResizableColumn onResize={handleResize(2)}>Age</ResizableColumn>
      </div>
    </div>
  );
};

export default Header;
