import React from "react";

import "./App.css";

import Table from "./Table";

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
  return (
    <div className="App" style={{ width: "100%", marginTop: "500px" }}>
      <Table data={data} />
    </div>
  );
};

export default App;
