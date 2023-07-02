const InstructionList = ({ mealInfo }) => {
  const { strInstructions } = mealInfo;
  let instructionsArray = strInstructions.split(".");
  instructionsArray = instructionsArray.filter(
    (instruction) => instruction.trim() !== ""
  );
  return (
    <div className="p-1">
      <h1 className="font-bold text-center bg-sky-300 rounded-lg py-1">
        Instructions
      </h1>
      <ul>
        {instructionsArray.map((instruction, index) => {
          instruction = instruction.trim();
          return (
            <li
              className="bg-orange-200 m-1 rounded-lg text-center"
              key={index}
            >
              {instruction}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InstructionList;
