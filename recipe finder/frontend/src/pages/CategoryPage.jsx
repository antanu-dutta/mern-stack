import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Search } from "lucide-react";
import Container from "../components/Container";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <main className="min-h-screen  px-4 py-8">
      <Container>
        {/* Header */}
        <h1 className="text-3xl font-bold text-orange-500 capitalize mb-6">
          {categoryName} Recipes
        </h1>

        {/* Search & Filter Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          {/* Search */}
          <div className="relative w-full sm:w-1/2">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-48 px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Filter by</option>
            <option value="latest">Latest</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Content */}
        <div className="text-center text-gray-500 bg-white rounded-xl shadow-md p-8">
          <p className="text-lg font-medium">
            No recipe right now until the backend is ready 🍳
          </p>
        </div>
      </Container>
    </main>
  );
};

export default CategoryPage;
