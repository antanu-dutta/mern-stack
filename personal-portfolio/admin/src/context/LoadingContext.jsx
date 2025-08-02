import React, { createContext, useContext, useState } from "react";

// Create context
const LoadingContext = createContext();

// Custom hook to use the context
export const useLoading = () => useContext(LoadingContext);

// Provider component
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/30">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </LoadingContext.Provider>
  );
};
