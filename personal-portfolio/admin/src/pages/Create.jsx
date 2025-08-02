import React from "react";
import AddProject from "../components/AddProject";
import { useLoading } from "../context/LoadingContext.jsx";
import { useProjects } from "../context/ProjectContext.jsx";

const Create = () => {
  const { showLoading, hideLoading } = useLoading();
  const { addProject } = useProjects();
  const handleProjectSubmit = async (data) => {
    showLoading();
    try {
      await addProject(data); // Pass plain object
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="max-w-[90%] mx-auto p-4">
      <AddProject onSubmit={handleProjectSubmit} />
    </div>
  );
};

export default Create;
