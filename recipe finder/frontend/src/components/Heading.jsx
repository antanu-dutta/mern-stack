import React from "react";

const Heading = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-4">
      {children}
    </h2>
  );
};

export default Heading;
