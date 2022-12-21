import { useReducer } from 'react';
import './App.css';
import Form from './form';
import Table from './table';

const initialData = []

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_DATA":
      return [...state, action.payload]
    case "RESET":
      return []
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, initialData);

  const addNewData = (data) => {
    dispatch({ type: "NEW_DATA", payload: data });
  }

  const clearData = () => {
    dispatch({ type: "RESET" });
  }
  return (
    <div className="App">
      <Form addNewData={addNewData} clearData={clearData}/>
      <Table data={data}/>
    </div>
  );
}

export default App;
