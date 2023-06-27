import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { API_URL } from "../../utils/constants";
const Body = () => {
  const [apiRes, setApiRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${API_URL}search.php?f=b`);
    const json = await data.json();
    console.log(json, "json");
    setApiRes(json?.meals);
    setFilteredRes(json?.meals);
  };

  return (
    <>
      <div className="searchContainer">
        <input
          type="search"
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
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
      </div>
      <div className="recipeContainer">
        {filteredRes.map((recipe) => {
          return <RecipeCard key={recipe.idMeal} resData={recipe} />;
        })}
      </div>
    </>
  );
};

export default Body;
