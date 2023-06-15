import React, { useState } from "react";

import "./table.css";

import Header from "./components/Header";
import Body from "./components/Body";

/*
  1. truyen data cho body
  2. state width va setWidths cho Header (moi column co width khac nhau)
*/

interface TableProps {
  data: any;
}

const Table = (props: TableProps) => {
  const { data } = props;
  const [columnWidths, setColumnWidths] = useState<Number[]>([200, 200, 200]); // array width cua moi column

  const setColumnWidth = (index: any, width: any) => {
    setColumnWidths((prev: any) => {
      const newWidths = [...prev];
      newWidths[index] = width;
      console.log(newWidths);
      return newWidths;
    });
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <Header columnWidths={columnWidths} setColumnWidth={setColumnWidth} />
        <Body columnWidths={columnWidths} data={data} />
      </div>
    </div>
  );
};

export default Table;
