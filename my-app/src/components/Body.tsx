import { FixedSizeList as List } from "react-window";

interface BodyProps {
  data: any;
  columnWidths: any;
  tableHeight?: any;
  width: any;
}

const Body = (props: BodyProps) => {
  const { data, columnWidths, tableHeight, width } = props;

  return (
    <div style={{ width }}>
      <List
        height={tableHeight} // table có chiều cao dựa vào chiều cao của được truyền xuống
        itemCount={data.length} // số dòng của table
        itemSize={40} // chiều cao của mỗi dòng
        width={width} // table có chiều rộng là tổng chiều rộng của tất cả column
      >
        {({ index, style }) => (
          <div
            className={index % 2 === 0 ? "even" : "odd"}
            style={{
              ...style, // style mặc định của react-window cho mỗi dòng (không bị trắng khi scroll)
              display: "flex",
              alignItems: "center",
            }}
          >
            {Object.keys(data[index]).map((key, columnIndex) => (
              <div
                key={key}
                style={{
                  width: columnWidths[columnIndex], // width của mỗi row bằng width của column tương ứng
                  alignItems: "center",
                }}
              >
                {data[index][key]}
              </div>
            ))}
          </div>
        )}
      </List>
    </div>
  );
};

export default Body;
