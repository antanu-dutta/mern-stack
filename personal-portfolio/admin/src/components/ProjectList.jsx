import ProjectCard from "../components/ProjectCard";

const ProjectList = ({ filteredProject, viewMode, handleDeleteProject }) => {
  return (
    <div
      className={`mt-10 ${
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          : "flex flex-col gap-6"
      }`}
    >
      {filteredProject.length === 0 ? (
        <div className="col-span-full text-center text-gray-400 text-lg font-medium p-10 border rounded-lg shadow-sm bg-white">
          No Projects Available
        </div>
      ) : (
        filteredProject.map((project, index) => (
          <div
            key={index}
            className={`${
              viewMode === "list"
                ? "w-full border rounded-lg shadow-md bg-white p-4"
                : ""
            }`}
          >
            <ProjectCard
              {...project}
              view={viewMode}
              onDelete={handleDeleteProject}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectList;
