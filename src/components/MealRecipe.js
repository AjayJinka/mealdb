import { useParams } from "react-router-dom";
import useMealRecipe from "../../utils/useMealRecipe";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";
import Video from "./Video";

const MealRecipe = () => {
  const { mealId } = useParams();
  const mealInfo = useMealRecipe(mealId);
  if (!mealInfo) return;
  console.log(mealInfo, "mealInfo");
  const { strMeal } = mealInfo;
  return (
    <div>
      <h1 className="p-2 bg-orange-200 text-center font-bold">{strMeal}</h1>
      <div className="grid grid-cols-[0.5fr_1fr_1fr]">
        <IngredientList mealInfo={mealInfo} />
        <Video mealInfo={mealInfo} />
        <InstructionList mealInfo={mealInfo} />
      </div>
    </div>
  );
};

export default MealRecipe;
