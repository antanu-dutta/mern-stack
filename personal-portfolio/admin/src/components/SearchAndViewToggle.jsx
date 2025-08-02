import { HiViewGrid } from "react-icons/hi";
import { CiBoxList } from "react-icons/ci";

const SearchAndViewToggle = ({ search, setSearch, viewMode, setViewMode }) => {
  return (
    <div className="flex items-center gap-4 ml-auto">
      <input
        type="search"
        placeholder="Search Project"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-60 pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
      />

      <div className="flex items-center space-x-2">
        <button
          onClick={() => setViewMode("grid")}
          className={`px-3 py-1 border rounded cursor-pointer ${
            viewMode === "grid"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <HiViewGrid />
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`px-3 py-1 border rounded cursor-pointer ${
            viewMode === "list"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <CiBoxList />
        </button>
      </div>
    </div>
  );
};

export default SearchAndViewToggle;
