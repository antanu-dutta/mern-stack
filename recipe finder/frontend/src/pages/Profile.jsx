import React, { useState, useEffect } from "react";
import { Mail, Camera, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SimpleProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({});
  const { getMe, deleteUser, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdate = async () => {
    const loadingToast = toast.loading("Updating profile...");

    try {
      const data = await updateUser(profileData);

      if (data?.success) {
        toast.success(data.message || "Profile updated!", { id: loadingToast });
        setIsEditing(false);
      } else {
        toast.error(data?.message || "Update failed!", { id: loadingToast });
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!", {
        id: loadingToast,
      });
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your account?"))
      return;

    const loadingToast = toast.loading("Deleting account...");

    try {
      const data = await deleteUser(profileData._id);
      console.log(data);
      if (data?.success) {
        toast.success(data.message || "Account deleted!", { id: loadingToast });
        navigate("/"); // redirect after deletion
      } else {
        toast.error(data?.message || "Delete failed!", { id: loadingToast });
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!", {
        id: loadingToast,
      });
    }
  };

  const fetchUser = async () => {
    try {
      const data = await getMe();
      setProfileData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <User size={32} className="text-white" />
            </div>
            <button className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
              <Camera size={14} />
            </button>
          </div>
        </div>

        {/* Profile Information */}
        <div className="text-center space-y-4">
          {/* Name */}
          <div>
            {isEditing ? (
              <input
                type="text"
                value={profileData.name || ""}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="text-2xl font-bold text-gray-900 text-center w-full border-b-2 border-blue-300 focus:border-blue-500 outline-none bg-transparent"
                placeholder="Enter your name"
              />
            ) : (
              <h1 className="text-2xl font-bold text-gray-900">
                {profileData.name}
              </h1>
            )}
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Mail size={16} />
            {isEditing ? (
              <input
                type="email"
                value={profileData.email || ""}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="text-center border-b border-gray-300 focus:border-blue-500 outline-none bg-transparent"
                placeholder="Enter your email"
              />
            ) : (
              <span>{profileData.email}</span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 text-center space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdate}
                className="px-6 py-2 rounded-lg font-medium bg-green-600 hover:bg-green-700 text-white"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 rounded-lg font-medium bg-yellow-400 text-black"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white"
              >
                Edit Profile
              </button>
              <button
                onClick={handleDelete}
                className="px-6 py-2 rounded-lg font-medium bg-red-700 hover:bg-red-800 text-white"
              >
                Delete Account
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
