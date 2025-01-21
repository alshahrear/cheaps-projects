import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";

const Card = ({ card, handleAddRecipes }) => {
  const {
    recipe_id,
    recipe_name,
    short_description,
    ingredients_length,
    preparing_time,
    calories,
    recipe_image,
    ingredients,
  } = card;

  return (
    <div className="ml-16 mr-16">
      <div className="card bg-base-100 w-[350px] shadow-lg border-2 pt-8">
        <figure>
          <img
            className="w-72 h-48 rounded-2xl"
            src={recipe_image}
            alt="Recipe"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <hr />
          <p className="text-xl font-bold">
            Ingredients: <span>{ingredients_length}</span>
          </p>
          <ul className="list-disc ml-5">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-lg">
                {ingredient}
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <p className="flex items-center text-xl gap-2">
              <MdOutlineWatchLater />
              <span>{preparing_time} minutes</span> 
            </p>
            <p className="flex items-center text-xl gap-2">
              <AiOutlineFire />
              <span>{calories} calories</span> 
            </p>
          </div>
          <div className="card-actions mt-5">
            <button
              onClick={() => handleAddRecipes(recipe_id, card)}
              className="btn text-xl pl-6 pr-6 rounded-3xl bg-[#0BE58A]"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
