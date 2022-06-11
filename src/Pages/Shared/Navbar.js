import React from "react";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="b   tn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Muhayminul</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div className="navbar-end text-2xl font-bold">
        <a
          href="../../../public/resume/syed_muhayminul_resume.pdf"
          className="btn rounded-lg"
          download
        >
          Ressume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
