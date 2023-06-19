import React, { useState } from "react";

import "./table.css";

import Header from "./components/Header";
import Body from "./components/Body";
import ResizableHeight from "./components/ResizableHeight";

interface TableProps {
  data: any;
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

const tableStyle: any = {
  position: "fixed", // table fixed ở bottom
  maxWidth: "100%", // table full width
  bottom: 0,
  overflowX: "auto", // scroll ngang table
};

const Table = (props: TableProps) => {
  const { data } = props;

  // đặt chiều cao mặc định cho table
  const [tableHeight, setTableHeight] = useState<Number>(400);

  const column = [];

  // có bao nhiêu column thì set width mặc định cho mỗi column là 200
  for (let i = 0; i < Object.keys(data[0]).length; i++) {
    column.push(200);
  }

  // set width cho mỗi column
  // array width của mỗi column
  const [columnWidths, setColumnWidths] = useState<Number[]>([...column]);

  // func resize width column
  const setColumnWidth = ({ index, width }: any) => {
    // index: vị trí column, width: width mới sau khi resize
    setColumnWidths((prev: any) => {
      // prev: array width của mỗi column
      const newColumnWidths = [...prev]; // copy array width của mỗi column
      // update width cua column va column ben canh
      // vd: nhan duoc width moi sau khi resize la 100, index la 2
      // -> width cua column 2 se la +100, width cua column 3 se la width cu - 100
      newColumnWidths[index] = newColumnWidths[index] + width;
      newColumnWidths[index + 1] = newColumnWidths[index + 1] - width;
      return newColumnWidths;
    });
  };

  // resize height table
  const handleResizeHeight = (height: any) => {
    setTableHeight((prev: any) => prev - height);
  };

  // tính tổng width của tất cả column để set width cho Header và Body
  const totalColumnWidth = columnWidths.reduce(
    (acc: any, width: any) => acc + width,
    0
  );

  return (
    <div style={{ ...tableStyle }}>
      <div>
        <ResizableHeight
          onResize={handleResizeHeight} // truyền func resize height table
          width={totalColumnWidth} // width của table = width của resize height
        ></ResizableHeight>
      </div>
      <Header
        columns={columns} // column header
        columnWidths={columnWidths} // array width của mỗi column
        onResize={setColumnWidth} // truyền func resize width column
        width={totalColumnWidth} // header width
        height={tableHeight}
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
