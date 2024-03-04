function List(props) {
  const fruits = props.items;
  const sortedFruits = fruits.sort((a, b) => a.calories - b.calories);

  const lowCalories = sortedFruits.filter((fruit) => fruit.calories < 60);

  const list = lowCalories.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : {fruit.calories}
    </li>
  ));
  return (
    <>
      <h3>{props.catagory}</h3>
      <ol>{list}</ol>
    </>
  );
}
export default List;