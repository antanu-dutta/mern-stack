import { useState } from "react";
import { Search } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    category: "Italian",
    image: "https://source.unsplash.com/400x300/?pasta",
  },
  {
    id: 2,
    title: "Chicken Curry",
    category: "Indian",
    image: "https://source.unsplash.com/400x300/?curry",
  },
  {
    id: 3,
    title: "Sushi Platter",
    category: "Japanese",
    image: "https://source.unsplash.com/400x300/?sushi",
  },
  {
    id: 4,
    title: "Tacos",
    category: "Mexican",
    image: "https://source.unsplash.com/400x300/?tacos",
  },
  {
    id: 5,
    title: "Greek Salad",
    category: "Greek",
    image: "https://source.unsplash.com/400x300/?salad",
  },
];

export default function PopularPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      (filter === "All" || recipe.category === filter) &&
      recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          {/* Search */}
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>

          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Italian">Italian</option>
            <option value="Indian">Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
            <option value="Greek">Greek</option>
          </select>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-gray-500">{recipe.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No recipes found 😔
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
