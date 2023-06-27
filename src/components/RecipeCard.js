const RecipeCard = (props) => {
  const { strMeal, strMealThumb } = props?.resData;
  return (
    <>
      <div className="recipeCard">
        <h3>{strMeal}</h3>
        <img src={strMealThumb} style={{ width: "100px" }}></img>
        <button>Get Recipe</button>
      </div>
    </>
  );
};

export default RecipeCard;
