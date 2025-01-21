
const Cook = ({ addRecipes }) => {
    
    return (
        <div>
            <div className="border-2 border-gray-200 w-96 mr-16 ml-20 p-5 rounded-xl space-y-4">
                <h2 className="text-center text-xl font-bold">Want to cook: <span>{addRecipes}</span></h2>
                <hr />
                <br />
                    <tr className="text-[#878787]">
                        <th className="px-6">Name</th>
                        <th className="px-6">Time</th>
                        <th className="px-6">Calories</th>
                    </tr>
                <div>
                    <h3 className="text-center text-xl font-bold pb-3">Currently cooking: <span> 02</span></h3>
                    <hr />
                    <br />
                    <tr className="text-[#878787]">
                        <th className="px-6">Name</th>
                        <th className="px-6">Time</th>
                        <th className="px-6">Calories</th>
                    </tr>
                    <div className="flex justify-end gap-5 pt-5 ">
                        <p className="text-[#696666] font-semibold">Total Time = <br />
                        <span>0</span> minutes</p>
                        <p className="text-[#696666] font-semibold">Total Calories = <br />
                        <span>0</span> calories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cook;