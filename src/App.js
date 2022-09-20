import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound";
import { useState } from "react";

function App() {
  const [darkTheme,setDarkTheme] = useState(true);

  
  return (
    <div data-theme={darkTheme?'business':'wireframe'} className="App mx-auto overflow-hidden container lg:px-5">
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
