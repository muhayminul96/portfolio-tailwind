import React from "react";
import Navbar from "../Shared/Navbar";
import Contract from "./Contract";
import Intro from "./Intro";
import MyProjects from "./MyProjects";

const Home = () => {
  return (
    <div className="container overflow-hidden">
      <Intro></Intro>
      <MyProjects></MyProjects>
      <Contract></Contract>
    </div>
  );
};

export default Home;
