import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";


const Card = ({ card }) => {
    const { recipe_name, short_description, ingredients_length, preparing_time, calories, recipe_image } = card;

    return (
        <div className="ml-16 mr-16">
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={recipe_image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr />
                    <p className="text-xl font-bold">Ingredients: <span>{ingredients_length}</span></p>
                    <ul>
                        {

                        }
                    </ul>
                    <div className="flex items-center">
                    <p className="flex items-center text-xl gap-2">
                        <MdOutlineWatchLater></MdOutlineWatchLater>
                        <span>{preparing_time}</span> minutes</p>
                    <p className="flex items-center text-xl gap-2">
                        <AiOutlineFire></AiOutlineFire>    
                        <span>{calories}</span> calories</p>
                    </div>
                    <div className="card-actions mt-5">
                        <button className="btn text-xl pl-6 pr-6 rounded-3xl bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
