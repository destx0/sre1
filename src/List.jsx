import PropTypes from "prop-types";

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
      <h3>{props.category}</h3>
      <ol>{list}</ol>
    </>
  );
}
List.defaultProps = {
  items: [],
  category: "category",
};

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
export default List;
