import BannerImg from "../../assets/images/Rectangle 1.png";

const Banner = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          borderRadius: "20px",
        }}
        className="text-center space-y-3 pt-32 mt-10 ml-16 mr-16"
      >
        <h1 className="text-4xl text-white font-bold">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="text-white">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding <br /> problems to become an
          exceptionally well world-class Programmer.
        </p>
        <div>
          <button className="btn font-extrabold rounded-3xl bg-[#0BE58A] border-[#0BE58A]">
            Explore Now
          </button>
          <button className="btn ml-4 text-white border-white font-extrabold rounded-3xl bg-inherit">
            Our Feedback
          </button>
        </div>
      </div>

      {/* Recipes Section */}
      <div className="mt-10 ml-16 mr-16 p-6 text-center bg-gray-100 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800">Our Recipes</h2>
        <p className="mt-4 text-gray-600">
        Discover delicious recipes for every occasion. From breakfast pancakes to hearty lunches, creamy pasta, flavorful soups, grilled chicken, and sweet <br /> desserts, explore ideas to satisfy your taste buds with ease and creativity.
        </p>
      </div>
    </>
  );
};

export default Banner;
