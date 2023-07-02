import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { API_URL } from "../../utils/constants";
const Body = () => {
  const [apiRes, setApiRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [recipeFirstLetter, setRecipeFirstLetter] = useState("a");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lettersArray = letters.split("");

  useEffect(() => {
    fetchData();
  }, [recipeFirstLetter]);

  const fetchData = async () => {
    const data = await fetch(`${API_URL}search.php?f=${recipeFirstLetter}`);
    const json = await data.json();
    console.log(json, "json");
    setApiRes(json?.meals);
    setFilteredRes(json?.meals);
  };

  return (
    <div className="px-2">
      <div className="py-4 flex">
        <input
          type="search"
          className="border-solid border-2 mr-2 px-1"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="bg-sky-400 rounded-lg px-4"
          onClick={() => {
            const filteredList = apiRes.filter((item) => {
              return item.strMeal
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRes(filteredList);
          }}
        >
          Search
        </button>
        <div className="pl-5 flex gap-1">
          Your recipe's first letter:
          {lettersArray.map((letter, index) => {
            return (
              <button
                onClick={(e) => {
                  const selectedLetter = e.target.textContent.toLowerCase();
                  setRecipeFirstLetter(selectedLetter);
                }}
                className="bg-sky-400 rounded-lg px-2 flex justify-center items-center hover:bg-green-400"
                key={index}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {filteredRes.map((recipe) => {
          return <RecipeCard key={recipe.idMeal} resData={recipe} />;
        })}
      </div>
    </div>
  );
};

export default Body;
