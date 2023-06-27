import { useEffect, useState } from "react";
import { API_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";

const MealRecipe = () => {
  const [mealInfo, setMealInfo] = useState(null);
  const { mealId } = useParams();
  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    const data = await fetch(`${API_URL}lookup.php?i=${mealId}`);
    const json = await data.json();
    //console.log(json, "json");
    setMealInfo(json?.meals?.[0]);
  };

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
