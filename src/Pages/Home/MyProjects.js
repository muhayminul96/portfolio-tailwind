import React, { useEffect, useState } from "react";
import Project from "./Project";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json").then((res) =>
      res.json().then((data) => setProjects(data))
    );
  }, []);
  return (
    <div className="my-16">
      <h1 className="text-6xl font-extrabold mb-12 text-accent">My Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-base-100">
        {projects.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
