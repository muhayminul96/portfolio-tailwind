import React from "react";
import introImg from "../../Images/muhayminul.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
          style={{ y: 100 }}
          initial={{ opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, stiffness: 100 }}
          src={introImg}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="..."
        />
        <motion.div
          style={{ y: 100 }}
          initial={{ opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, stiffness: 100 }}
          className="text-left lg:ml-16"
        >
          <h1 className="text-4xl lg:text-7xl my-6 font-bold text-info">
            Hello, I am{" "}
          </h1>
          <h1 className="text-3xl lg:text-6xl lg:mb-3 font-bold text-success">
            Syed Muhaiminul Islam
          </h1>
          <p className="py-4 text-xl lg:text-2xl">
            I am mainly frontend developer and working with react JS. As a
            Fronted Developer, I also have over a year of experience. I've
            already contributed to a number of projects.
          </p>
          <button className="btn btn-xl rounded-2xl px-7 my-5 btn-secondary">
            Hire Me
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
