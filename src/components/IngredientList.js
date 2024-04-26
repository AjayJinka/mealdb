const IngredientList = ({ mealInfo }) => {
  let ingredArray = [];
  for (let key in mealInfo) {
    if (mealInfo[key] && String(key).startsWith("strIngredient")) {
      const ingredNum = Number(String(key).replace(/\D/g, ""));
      const ingredient = mealInfo[key];
      const measure = mealInfo[`strMeasure${ingredNum}`];
      ingredArray.push([ingredient, measure, ingredNum]);
    }
  }
  return (
    <div className="text-center p-1">
      <h1 className="font-bold bg-sky-300 rounded-lg py-1">Ingredient List</h1>
      <ul className="text-left">
        {ingredArray.map((item) => {
          const [ingredient, measure, ingredNum] = item;
          return (
            <li
              key={ingredNum}
              className="bg-orange-200 m-1 rounded-lg text-center"
            >
              {measure} {ingredient}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientList;
