import React from "react";
import { motion } from "framer-motion";


const Blog = () => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }
  return (
    <>
    <motion.div>
      <h1 className="text-6xl my-28">coming soon</h1>
    </motion.div>
  </>
  );
};

export default Blog;
