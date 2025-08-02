import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal"; // make sure the path is correct

const ProjectCard = ({
  _id,
  image,
  title,
  description,
  github,
  live,
  view,
  onDelete,
}) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirmDelete = () => {
    onDelete(_id);
    setShowConfirm(false);
  };

  return (
    <>
      <div
        className={`rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300 ${
          view === "list"
            ? "flex flex-col md:flex-row items-center gap-4 p-4"
            : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          className={`${
            view === "list"
              ? "w-full md:w-48 h-32 object-cover rounded-md"
              : "w-full h-48 object-cover"
          }`}
        />
        <div className="p-4 flex flex-col gap-2 w-full">
          <h3 className="text-lg font-bold text-indigo-700">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="flex flex-wrap gap-4 text-sm mt-4 items-center">
            <a
              href={github}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-md transition duration-200"
            >
              GitHub
            </a>
            <a
              href={live}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 shadow-md transition duration-200"
            >
              Live Demo
            </a>

            {onDelete && (
              <button
                onClick={() => setShowConfirm(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 shadow-md transition duration-200"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        open={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default ProjectCard;
