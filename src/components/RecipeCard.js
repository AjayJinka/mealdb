import { Link } from "react-router-dom";
const RecipeCard = (props) => {
  const { strMeal, strMealThumb, idMeal } = props?.resData;
  return (
    <>
      <div className="bg-gray-200 hover:bg-gray-300 rounded-lg grid grid-cols-1 grid-rows-[0.5fr_0.5fr_0.5fr] gap-2 items-center justify-items-center">
        <h3 className="font-bold text-center">{strMeal}</h3>
        <img src={strMealThumb} className="w-[100px]"></img>
        <Link to={"recipe/" + idMeal} className="bg-sky-400 px-3 rounded-lg">
          <button>Get Recipe</button>
        </Link>
      </div>
    </>
  );
};

export default RecipeCard;
