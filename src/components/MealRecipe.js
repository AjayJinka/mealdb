import { useParams } from "react-router-dom";
import useMealRecipe from "../../utils/useMealRecipe";

const MealRecipe = () => {
  const { mealId } = useParams();
  const mealInfo = useMealRecipe(mealId);

  if (!mealInfo) return;
  console.log(mealInfo, "mealInfo");
  const { strMeal } = mealInfo;
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
  } = mealInfo;

  const ingredientArr = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
  ];

  return (
    <div>
      <h1>{strMeal}</h1>
      <ul>
        {ingredientArr.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
};

export default MealRecipe;
