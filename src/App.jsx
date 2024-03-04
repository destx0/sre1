import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 52 },
    { id: 2, name: "banana", calories: 96 },
    { id: 3, name: "cherry", calories: 50 },
    { id: 4, name: "orange", calories: 43 },
    { id: 5, name: "grape", calories: 69 },
  ];
  // return <p>hello</p>;
  return <List items={fruits} catagory={"Fruits"} />;
}
export default App;
