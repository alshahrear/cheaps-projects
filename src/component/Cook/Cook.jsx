const Cook = ({ selectedRecipes }) => {
    return (
        <div>
            <div
                className="border-2 border-gray-200 mr-16 pt-5 pr-5 pb-5 rounded-xl space-y-4"
                style={{ maxWidth: '500px', overflow: 'hidden', margin: '0 auto' }}
            >
                <h2 className="text-center text-xl font-bold">
                    Want to cook: <span>{selectedRecipes.length}</span>
                </h2>
                <div className="pl-10 pr-10"><hr /></div>
                <table className="w-full">
                    <thead className="text-[#878787]">
                        <tr>
                            <th className="px-6">Name</th>
                            <th className="px-6">Time</th>
                            <th className="px-6">Calories</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                        {selectedRecipes.map((recipe, index) => (
                            <tr key={index} className="text-[#878787]">
                                <td className="px-3 text-black font-bold">{recipe.recipe_id}</td>
                                <td className="px-3">{recipe.recipe_name}</td>
                                <td className="px-3">{recipe.preparing_time} minutes</td>
                                <td className="px-3">{recipe.calories} calories</td>
                                <td>
                                    <button className="text-black font-semibold pl-3 pr-3 pt-2 pb-2 bg-[#0BE58A] rounded-3xl hover:bg-gray-300">
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <h2 className="text-center text-xl font-bold">
                        Currently cooking: <span>0</span>
                    </h2>
                    <br />
                    <div className="pl-10 pr-10"><hr /></div>
                </div>
                <div className="flex justify-end gap-5 pt-5">
                    <p className="text-[#696666] font-semibold">
                        Total Time = <br />
                        <span>
                            {selectedRecipes.reduce(
                                (total, recipe) => total + Number(recipe.preparing_time || 0),
                                0
                            )}{" "}
                            minutes
                        </span>
                    </p>
                    <p className="text-[#696666] font-semibold">
                        Total Calories = <br />
                        <span>
                            {selectedRecipes.reduce(
                                (total, recipe) => total + Number(recipe.calories || 0),
                                0
                            )}{" "}
                            calories
                        </span>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cook;
