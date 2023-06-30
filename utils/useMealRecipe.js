import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useMealRecipe = (mealId) => {
  const [mealInfo, setMealInfo] = useState(null);
  useEffect(() => {
    fetchRecipe();
  }, []);
  const fetchRecipe = async () => {
    const data = await fetch(`${API_URL}lookup.php?i=${mealId}`);
    const json = await data.json();
    setMealInfo(json?.meals?.[0]);
  };
  return mealInfo;
};

export default useMealRecipe;
