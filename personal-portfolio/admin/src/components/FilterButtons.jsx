const FilterButtons = ({ filter, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filter.map((f, index) => (
        <button
          key={index}
          onClick={() => setActiveFilter(f)}
          className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 shadow-sm ${
            activeFilter === f
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-indigo-500 hover:text-white"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
