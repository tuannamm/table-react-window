import React, { useState } from "react";

import "./table.css";

import Header from "./components/Header";
import Body from "./components/Body";
import ResizableHeight from "./components/ResizableHeight";

/*
  1. truyen data cho body
  2. state width va setWidths cho Header (moi column co width khac nhau)
*/

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
  overflow: "auto",
};

const Table = (props: TableProps) => {
  const { data } = props;

  const [tableHeight, setTableHeight] = useState<Number>(400);

  const column = [];

  for (let i = 0; i < Object.keys(data[0]).length; i++) {
    column.push(200);
  }

  const [columnWidths, setColumnWidths] = useState<Number[]>([...column]); // array width cua moi column

  const setColumnWidth = ({ index, width }: any) => {
    setColumnWidths((prev: any) => {
      const newWidths = [...prev];
      newWidths[index] = newWidths[index] + width;
      newWidths[index + 1] = newWidths[index + 1] - width;
      return newWidths;
    });
  };

  const handleResizeHeight = (height: any) => {
    setTableHeight((prev: any) => prev + height);
  };

  console.log("tableHeight", tableHeight);

  return (
    <div style={{ ...tableStyle }}>
      <div>
        <ResizableHeight onResize={handleResizeHeight}></ResizableHeight>
      </div>
      <Header
        columns={columns}
        columnWidths={columnWidths}
        setColumnWidth={setColumnWidth}
      />
      <Body columnWidths={columnWidths} data={data} tableHeight={tableHeight} />
    </div>
  );
};

export default Table;
