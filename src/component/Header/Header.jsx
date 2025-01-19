import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <nav className="p-4 flex justify-between items-center ml-16 mr-16">
      <div className="">
        <h2 className="text-3xl font-extrabold">Recipe Calories</h2>
      </div>
      <div className="flex space-x-4 text-xl gap-5">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Recipes</a>
        <a href="">Search</a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="form-control">
          <div className="relative flex items-center">
            <IoSearchOutline className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-gray-100 pl-10 w-24 md:w-auto rounded-3xl"
            />
          </div>
        </div>
        <CgProfile className="text-black bg-[#0BE58A] text-4xl rounded-full w-12 h-12 p-2" />
      </div>
    </nav>
  );
};

export default Header;
