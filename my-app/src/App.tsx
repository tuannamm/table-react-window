import { useState } from "react";
import "./App.css";

import Table from "./components/Table";

// data fake 1000 dòng
const data = new Array(1000).fill({
  id: "1",
  name: "Digi-texx",
  age: "20",
  address: "HCM",
  phone: "0123456789",
  email: "digi-texx@gmail.com",
  website: "digi-texx.com",
  company: "Digi-texx",
  hometown: "Germany",
  building: "Anna Building",
  room: "Technical Room",
  floor: "Floor 2",
  location: "Cong vien phan mem quang trung",
  street: "Quang Trung",
  district: "Q12",
  city: "HCM",
  country: "Viet Nam",
  zipCode: "700000",
  employee: "1000",
  revenue: "1000000",
  profit: "100000",
  description: "Digi-texx",
  note: "Digi-texx",
});

const App = () => {
  const [resizableWidth, setResizableWidth] = useState<boolean>(false);
  const [resizableHeight, setResizableHeight] = useState<boolean>(false);

  const handleChangeModeWidth = () => {
    setResizableWidth(!resizableWidth);
  };

  const handleChangeModeHeight = () => {
    setResizableHeight(!resizableHeight);
  };

  return (
    <div className="App">
      <button onClick={handleChangeModeWidth}>
        Resize width mode: {resizableWidth ? "ON" : "OFF"}
      </button>
      <button onClick={handleChangeModeHeight}>
        Resize height mode: {resizableHeight ? "ON" : "OFF"}
      </button>
      <Table
        data={data}
        enableResizableWidth={resizableWidth}
        enableResizableHeight={resizableHeight}
      />
    </div>
  );
};

export default App;
