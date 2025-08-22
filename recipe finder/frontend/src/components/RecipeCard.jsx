import React from "react";
import { Clock, Flame } from "lucide-react";

const RecipeCard = ({ image, title, description, time, calories }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Meta info */}
        <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} /> <span>{time} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame size={16} /> <span>{calories} cal</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
