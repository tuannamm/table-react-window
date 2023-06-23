import React, { useState } from "react";

import "./table.css";

import Header from "./Header/Header";
import Body from "./Body/Body";
import ResizableHeight from "./ResizableHeight";

interface TableProps {
  data: any;
  enableResizableHeight: boolean;
  enableResizableWidth: boolean;
}

const columns = [
  "ID",
  "Name",
  "Age",
  "Address",
  "Phone",
  "Email",
  "Website",
  "Company",
  "Hometown",
  "Building",
  "Room",
  "Floor",
  "Location",
  "Street",
  "District",
  "City",
  "Country",
  "Zip Code",
  "Employee",
  "Revenue",
  "Profit",
  "Description",
  "Note",
];

const tableStyle: React.CSSProperties = {
  position: "fixed", // table fixed ở bottom
  maxWidth: "100%", // table full width
  bottom: 0,
  overflowX: "auto", // scroll ngang table
};

const Table = (props: TableProps) => {
  const { data, enableResizableHeight, enableResizableWidth } = props;

  // đặt chiều cao mặc định cho table sau này ở trên sẽ truyền vô sau
  const [tableHeight, setTableHeight] = useState<number>(400);

  const column = [];

  // có bao nhiêu column thì set width mặc định cho mỗi column là 200
  for (let i = 0; i < Object.keys(data[0]).length; i++) {
    column.push(200);
  }

  // set width cho mỗi column
  // array width của mỗi column
  const [columnWidths, setColumnWidths] = useState<number[]>([...column]);

  // func resize width column
  const setColumnWidth = ({ index, width }: any) => {
    // index: vị trí column, width: width mới sau khi resize
    setColumnWidths((prev: any) => {
      const newColumnWidths = [...prev]; // copy array width của mỗi column
      // update width cua column va column ben canh
      // vd: nhận được width mới sau khi resize là 100, index là 2
      // -> width sau khi resize của column 2 sẽ là +100, width cua column 3 se la width cu - 100
      newColumnWidths[index] = newColumnWidths[index] + width;
      newColumnWidths[index + 1] = newColumnWidths[index + 1] - width;
      return newColumnWidths;
    });
  };

  // resize height table
  const handleResizeHeight = (height: number) => {
    setTableHeight((prev: any) => prev - height);
  };

  // tính tổng width của tất cả column để set width cho Header và Body
  const totalColumnWidth = columnWidths.reduce(
    (acc: number, width: number) => acc + width,
    0
  );

  return (
    <div style={{ ...tableStyle }}>
      {enableResizableHeight && (
        <div>
          <ResizableHeight
            onResize={handleResizeHeight} // truyền func resize height table
            width={totalColumnWidth} // width của table = width của resize height
          ></ResizableHeight>
        </div>
      )}

      <Header
        columns={columns} // column header
        columnWidths={columnWidths} // array width của mỗi column
        onResize={setColumnWidth} // truyền func resize width column
        width={totalColumnWidth} // header width
        height={tableHeight}
        enableResizableWidth={enableResizableWidth}
      />
      <Body
        data={data}
        columnWidths={columnWidths} // truyền array width của mỗi column để  làm width của mỗi ô record
        tableHeight={tableHeight} // truyền height của table sau khi resize
        width={totalColumnWidth} // body width
      />
    </div>
  );
};

export default Table;
