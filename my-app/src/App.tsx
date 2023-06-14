import React from "react";

import "./App.css";

import Table from "./Table";

const data = new Array(1000).fill({
  id: "1",
  name: "1",
  age: "1",
});

const App = () => {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Table data={data} />
    </div>
  );
};

export default App;
