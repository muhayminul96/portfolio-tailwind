import React from "react";

const Project = ({project}) => {
    const {name,image,liveLink,description,gitLink,serverLink,_id} = project
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
        />
      </figure>
      <div class="card-body text-left ">
        <a href={liveLink} target="_blank" rel="noreferrer">
            <h2 class="card-title text-2xl font-bold">{name}</h2>
        </a>
        <p className="text-xl">            
          {description}
        </p>
        <button className="btn btn-ghost btn-lg">Ditails</button>
        <div class="card-actions justify-end">
         <a href={gitLink} target="_blank" rel="noopener noreferrer"><div class="badge badge-outline">GitHub</div></a>
        {serverLink && <a href={serverLink} target="_blank" rel="noopener noreferrer"><div class="badge badge-outline">Server</div></a>
}
        </div>
      </div>
    </div>
  );
};

export default Project;
