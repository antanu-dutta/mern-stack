import React, { useState, useEffect } from "react";
import { useProjects } from "../context/ProjectContext.jsx";
import FilterButtons from "../components/FilterButtons";
import SearchAndViewToggle from "../components/SearchAndViewToggle";
import ProjectList from "../components/ProjectList";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const { projects, fetchProjects, deleteProject } = useProjects();
  const [filteredProject, setFilteredProject] = useState([]);
  const [search, setSearch] = useState("");

  const filter = [
    "All",
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "NODEJS",
    "NEXT JS",
    "FULL STACK",
  ];

  const handleDeleteProject = async (id) => {
    await deleteProject(id);
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    let tempProjects = [...projects];

    if (activeFilter !== "All") {
      tempProjects = tempProjects.filter(
        (p) => p.projectType.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    if (search.trim() !== "") {
      tempProjects = tempProjects.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.projectType.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProject(tempProjects);
  }, [activeFilter, projects, search]);

  return (
    <div className="max-w-[90%] mx-auto p-4">
      <h2 className="text-2xl font-semibold tracking-widest uppercase text-indigo-700 mb-10 text-center">
        My Projects
      </h2>

      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <FilterButtons
          filter={filter}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <SearchAndViewToggle
          search={search}
          setSearch={setSearch}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>

      <ProjectList
        filteredProject={filteredProject}
        viewMode={viewMode}
        handleDeleteProject={handleDeleteProject}
      />
    </div>
  );
};

export default Projects;
