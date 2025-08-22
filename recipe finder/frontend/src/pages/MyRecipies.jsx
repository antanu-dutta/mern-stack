import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import AddRecipeModal from "../modals/AddRecipeModal";

const MyRecipes = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAddRecipe = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl font-bold text-orange-600 mb-6">
            My Recipes
          </h1>

          {/* Search and Add Recipe */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Search your recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <button
              onClick={handleAddRecipe}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow transition"
            >
              <PlusCircle size={20} />
              Add New Recipe
            </button>
          </div>

          {/* Placeholder */}
          <div className="text-center text-gray-500 text-lg">
            You don’t have any recipes yet.
          </div>
        </div>
      </div>
      {isOpen && (
        <AddRecipeModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmit={() => alert("submitted")}
        />
      )}
    </>
  );
};

export default MyRecipes;
