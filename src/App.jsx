import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 52 },
    { id: 2, name: "banana", calories: 96 },
    { id: 3, name: "cherry", calories: 50 },
    { id: 4, name: "orange", calories: 43 },
    { id: 5, name: "grape", calories: 69 },
  ];

  const vegetables = [
    { id: 1, name: "carrot", calories: 41 },
    { id: 2, name: "broccoli", calories: 55 },
    { id: 3, name: "spinach", calories: 23 },
    { id: 4, name: "tomato", calories: 18 },
    { id: 5, name: "cucumber", calories: 16 },
  ];

  return (
    <>
      <List></List>
      <List items={fruits} category={"Fruits"} />
      <List items={vegetables} category={"Vegetables"} />
    </>
  );
}

export default App;
