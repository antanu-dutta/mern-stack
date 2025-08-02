import React from "react";
import { useProjects } from "../context/ProjectContext";

const OverviewCards = () => {
  const { projects } = useProjects();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white  rounded-xl shadow p-5">
        <h2 className="text-sm text-gray-500  mb-1">Projects Created</h2>
        <p className="text-3xl font-bold text-gray-800 ">{projects.length}</p>
      </div>
      <div className="bg-white  rounded-xl shadow p-5">
        <h2 className="text-sm text-gray-500  mb-1">Tasks Completed</h2>
        <p className="text-3xl font-bold text-green-600 ">37</p>
      </div>
      <div className="bg-white  rounded-xl shadow p-5">
        <h2 className="text-sm text-gray-500  mb-1">Hours Logged</h2>
        <p className="text-3xl font-bold text-blue-600 ">21.5h</p>
      </div>
    </section>
  );
};

export default OverviewCards;
