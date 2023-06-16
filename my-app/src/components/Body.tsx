import React from "react";
import { FixedSizeList as List } from "react-window";

interface BodyProps {
  data: any;
  columnWidths: any;
  tableHeight?: any;
}

const Body = (props: BodyProps) => {
  const { data, columnWidths, tableHeight } = props;

  return (
    <div>
      <List
        height={tableHeight}
        itemCount={data.length}
        itemSize={30}
        width={columnWidths.reduce((acc: any, width: any) => acc + width, 0)}
      >
        {({ index, style }) => (
          <div
            className={index % 2 === 0 ? "even" : "odd"}
            style={{ ...style, display: "flex", height: "30px" }}
          >
            <div
              style={{
                width: columnWidths[0],
                alignItems: "center",
              }}
            >
              {data[index].id}
            </div>
            <div
              style={{
                width: columnWidths[1],
                alignItems: "center",
              }}
            >
              {data[index].name}
            </div>
            <div
              style={{
                width: columnWidths[2],
                alignItems: "center",
              }}
            >
              {data[index].age}
            </div>
            <div
              style={{
                width: columnWidths[3],
                alignItems: "center",
              }}
            >
              {data[index].address}
            </div>
            <div
              style={{
                width: columnWidths[4],
                alignItems: "center",
              }}
            >
              {data[index].phone}
            </div>
            <div
              style={{
                width: columnWidths[5],
                alignItems: "center",
              }}
            >
              {data[index].email}
            </div>
            <div
              style={{
                width: columnWidths[6],
                alignItems: "center",
              }}
            >
              {data[index].website}
            </div>
            <div
              style={{
                width: columnWidths[7],
                alignItems: "center",
              }}
            >
              {data[index].company}
            </div>
            <div
              style={{
                width: columnWidths[8],
                alignItems: "center",
              }}
            >
              {data[index].hometown}
            </div>
            <div
              style={{
                width: columnWidths[9],
                alignItems: "center",
              }}
            >
              {data[index].building}
            </div>
            <div
              style={{
                width: columnWidths[10],
                alignItems: "center",
              }}
            >
              {data[index].room}
            </div>
            <div
              style={{
                width: columnWidths[11],
                alignItems: "center",
              }}
            >
              {data[index].floor}
            </div>
            <div
              style={{
                width: columnWidths[12],
                alignItems: "center",
              }}
            >
              {data[index].location}
            </div>
            <div
              style={{
                width: columnWidths[13],
                alignItems: "center",
              }}
            >
              {data[index].street}
            </div>
            <div
              style={{
                width: columnWidths[14],
                alignItems: "center",
              }}
            >
              {data[index].district}
            </div>
            <div
              style={{
                width: columnWidths[15],
                alignItems: "center",
              }}
            >
              {data[index].city}
            </div>
            <div
              style={{
                width: columnWidths[16],
                alignItems: "center",
              }}
            >
              {data[index].country}
            </div>
            <div
              style={{
                width: columnWidths[17],
                alignItems: "center",
              }}
            >
              {data[index].zipCode}
            </div>
            <div
              style={{
                width: columnWidths[18],
                alignItems: "center",
              }}
            >
              {data[index].employee}
            </div>
            <div
              style={{
                width: columnWidths[19],
                alignItems: "center",
              }}
            >
              {data[index].revenue}
            </div>
            <div
              style={{
                width: columnWidths[20],
                alignItems: "center",
              }}
            >
              {data[index].profit}
            </div>
            <div
              style={{
                width: columnWidths[21],
                alignItems: "center",
              }}
            >
              {data[index].description}
            </div>
            <div
              style={{
                width: columnWidths[22],
                alignItems: "center",
              }}
            >
              {data[index].note}
            </div>
          </div>
        )}
      </List>
    </div>
  );
};

export default Body;
