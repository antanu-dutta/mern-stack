import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axiosConfig.js";
import iziToast from "izitoast";
import { useLoading } from "./LoadingContext.jsx";

// Create context
const ProjectContext = createContext();

// Create provider
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const { showLoading, hideLoading } = useLoading();

  // Fetch all projects
  const fetchProjects = async () => {
    showLoading();
    try {
      const res = await api.get("/projects");
      setProjects(res.data || []);
    } catch (error) {
      iziToast.error({
        title: "Error",
        message: error?.response?.data?.message || "Failed to fetch projects",
      });
    } finally {
      hideLoading();
    }
  };

  // Add project (with image)
  const addProject = async (formDataObj) => {
    showLoading();
    console.log(formDataObj);
    try {
      const formData = new FormData();
      for (const key in formDataObj) {
        formData.append(key, formDataObj[key]);
      }
      console.log(formData);

      const res = await api.post("/projects/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // ✅ ensure correct header
        },
      });
      setProjects((prev) => [res.data.project, ...prev]);
      iziToast.success({
        title: "Success",
        message: "Project added!",
      });
      hideLoading();
    } catch (error) {
      iziToast.error({
        title: "Error",
        message: error?.response?.data?.message || "Failed to add project",
      });
      console.log(error?.response?.data?.error);
    } finally {
      hideLoading(false);
    }
  };

  // Delete a project
  const deleteProject = async (id) => {
    showLoading();
    try {
      await api.delete(`/projects/delete/${id}`);
      setProjects((prev) => prev.filter((p) => p._id !== id));
      iziToast.success({
        title: "Deleted",
        message: "Project removed",
      });
      hideLoading();
    } catch (error) {
      iziToast.error({
        title: "Error",
        message: "Failed to delete",
      });
    } finally {
      hideLoading();
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        deleteProject,
        fetchProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook
export const useProjects = () => useContext(ProjectContext);
