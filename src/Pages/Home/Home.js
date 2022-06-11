import React from "react";
import Navbar from "../Shared/Navbar";
import Intro from "./Intro";
import MyProjects from "./MyProjects";

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <MyProjects></MyProjects>
    </div>
  );
};

export default Home;
