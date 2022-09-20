import { motion } from "framer-motion";
import React from "react";

const Project = ({ project }) => {
  const { name, image, liveLink, description, gitLink, serverLink, _id } =
    project;

  return (
    <motion.div class="card w-full bg-base-100 shadow-xl mx-auto o">
      <figure>
        <motion.img src={image} alt={name} />
      </figure>
      <div class="card-body text-left bg-base-100">
        <a href={liveLink} target="_blank" rel="noreferrer">
          <h2 class="card-title text-2xl font-bold">{name}</h2>
        </a>
        <p className="text-xl">{description}</p>
        <button className="btn btn-ghost btn-lg">Details</button>
        <div class="card-actions justify-end">
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <div class="badge badge-outline">GitHub</div>
          </a>
          {serverLink && (
            <a href={serverLink} target="_blank" rel="noopener noreferrer">
              <div class="badge badge-outline">Server</div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
