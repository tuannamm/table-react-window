import React from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

interface BodyProps {
  data: any;
  columnWidths: any;
}

const Body = (props: BodyProps) => {
  const { data, columnWidths } = props;

  
  return (
    <div>
      <List
        height={600}
        itemCount={data.length}
        itemSize={50}
        width={columnWidths.reduce((acc:any, width:any) => acc + width, 0)}
      >
        {({ index, style }) => (
          <div className={index % 2 === 0 ? 'even' : 'odd'} style={{...style, display: "flex", height:"30px"}}>
            <div style={{ width: columnWidths[0] }}>{data[index].id}</div>
            <div style={{ width: columnWidths[1] }}>{data[index].name}</div>
            <div style={{ width: columnWidths[2] }}>{data[index].age}</div>
          </div>
        )}
      </List>
    </div>);
};

export default Body;
