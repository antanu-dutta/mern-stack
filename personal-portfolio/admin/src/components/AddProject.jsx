import { useState } from "react";
import {
  Upload,
  Github,
  ExternalLink,
  FileText,
  Type,
  File,
} from "lucide-react";
import { FaFile } from "react-icons/fa";

const AddProject = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    githubLink: "",
    hostedLink: "",
    image: null,
    projectType: "JAVASCRIPT",
  });
  const options = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "NODEJS",
    "NEXT JS",
    "FULL STACK",
  ];
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, image: e.dataTransfer.files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
      console.log(formData);
      // setFormData({
      //   title: "",
      //   description: "",
      //   githubLink: "",
      //   hostedLink: "",
      //   image: null,
      // });
    }
  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Upload className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">
            Add New Project
          </h1>
          <p className="text-gray-500">
            Share your latest creation with the world
          </p>
        </div>

        {/* Form Container */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow">
            {/* Title */}
            <div className="space-y-2 mb-6">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Type className="w-4 h-4" />
                Project Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter project title..."
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2 mb-6">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <FileText className="w-4 h-4" />
                Description
              </label>
              <textarea
                name="description"
                rows={4}
                placeholder="Describe the project..."
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              />
            </div>

            {/* GitHub and Live Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <Github className="w-4 h-4" />
                  GitHub
                </label>
                <input
                  type="url"
                  name="githubLink"
                  placeholder="https://github.com/..."
                  value={formData.githubLink}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </label>
                <input
                  type="url"
                  name="hostedLink"
                  placeholder="https://your-project.com"
                  value={formData.hostedLink}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="w-full mb-6 space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <File className="w-4 h-4" />
                Project Type
              </label>
              <select
                name="projectType"
                className="w-full p-3 border border-gray-300 rounded-xl text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                value={formData.projectType}
                onChange={handleChange}
              >
                {options.map((o, i) => (
                  <option key={i} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Upload className="w-4 h-4" />
                Project Image
              </label>
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-white"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  name="image"
                  accept="image/*" // ✅ Corrected
                  onChange={handleChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  required
                />

                {formData.image ? (
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-green-600 font-medium">
                      {formData.image.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Click to change image
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <Upload className="w-6 h-6 text-gray-600" />
                    </div>
                    <p className="text-gray-700 font-medium">
                      Drop your image here or click to upload
                    </p>
                    <p className="text-sm text-gray-400">
                      JPG, PNG, GIF up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
