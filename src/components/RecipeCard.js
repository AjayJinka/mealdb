import { Link } from "react-router-dom";
const RecipeCard = (props) => {
  const { strMeal, strMealThumb, idMeal } = props?.resData;
  return (
    <>
      <div className="recipeCard">
        <h3>{strMeal}</h3>
        <img src={strMealThumb} style={{ width: "100px" }}></img>
        <Link to={"recipe/" + idMeal}>
          <button>Get Recipe</button>
        </Link>
      </div>
    </>
  );
};

export default RecipeCard;
