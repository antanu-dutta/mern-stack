// ProjectList.jsx
import ProjectCard from "../components/ProjectCard";

const ProjectList = ({ filteredProject, viewMode, handleDeleteProject }) => {
  return (
    <div className="mt-10">
      {filteredProject.length === 0 ? (
        <div className="col-span-full text-center text-gray-400 text-lg font-medium p-10 border rounded-lg shadow-sm bg-white">
          No Projects Available
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProject.map((project) => (
            <ProjectCard
              key={project._id}
              {...project}
              view={viewMode}
              onDelete={handleDeleteProject}
            />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">SL No</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">GitHub</th>
                <th className="px-6 py-3">Live Demo</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProject.map((project, index) => (
                <tr key={project._id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium">{project.title}</td>
                  <td className="px-6 py-4">{project.description}</td>
                  <td className="px-6 py-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-indigo-600 hover:underline"
                    >
                      GitHub
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-green-600 hover:underline"
                    >
                      Live
                    </a>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => handleDeleteProject(project._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
