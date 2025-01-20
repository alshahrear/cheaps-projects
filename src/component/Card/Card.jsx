import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";


const Card = ({ card }) => {
    const { recipe_name, short_description, ingredients_length, preparing_time, calories, recipe_image, ingredients } = card;

    return (
        <div className="ml-16 mr-16 ">
            <div className="card bg-base-100 w-96 shadow-lg border-2 pt-8">
                <figure>
                    <img className="w-72 h-48 rounded-2xl" src={recipe_image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr />
                    <p className="text-xl font-bold">Ingredients: <span>{ingredients_length}</span></p>
                    <ul className="list-disc ml-5">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="text-lg">
                                {ingredient}
                            </li>
                        ))}
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

            {/* another card */}

            {/* <div className="border-2 border-gray-200">
                <h2>Want to cook: <span> 01</span></h2>
                <hr />
                    <tr>
                        <th className="px-6">Name</th>
                        <th className="px-6">Time</th>
                        <th className="px-6">Calories</th>
                    </tr>
                <div>
                    <h3>Currently cooking: <span> 02</span></h3>
                    <hr />
                    <tr>
                        <th className="px-6">Name</th>
                        <th className="px-6">Time</th>
                        <th className="px-6">Calories</th>
                    </tr>
                    <div className="flex">
                        <p>Total Time = <br />
                        <span>0</span> minutes</p>
                        <p>Total Calories = <br />
                        <span>0</span> calories</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Card;
