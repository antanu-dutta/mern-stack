import { Search } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Fresh ingredients"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Recipes for Every Taste
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Search 10,000+ recipes by ingredients, cuisine & mood.
        </p>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for recipes, ingredients, cuisines…"
            className="flex-1 px-4 py-3 text-black outline-none"
          />
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-4 flex items-center justify-center">
            <Search size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
