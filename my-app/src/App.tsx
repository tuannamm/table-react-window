import React from 'react';

import './App.css';

import Table from './Table';

const data = new Array(1000).fill({
  id: "1",
  name: "1",
  age: "1",
  recordId: "1",
  headerId: 1,
  givenName: "1",
  surname: "1",
  relationship: "1",
  gender: "1",
  martialStatus: "1",
  birthDate: "1",
  birthDate1: "1",
  birthDate2: "1",
  birthDate3: "1",
  birthDate4: "1",
  birthDate5: "1",
  birthDate6: "1",
  birthDate7: "1",
  birthDate8: "1",
  birthDate9: "1",
  birthDate10: "1",
  birthDate11: "1",
  birthDate12: "1",
  birthDate13: "1",
  birthDate14: "1",
  birthDate15: "1",
  birthDate16: "1",
  birthDate17: "1",
});


const App = () => {
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
