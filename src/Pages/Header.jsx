import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { AuthContext } from "../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  //User log out.
  const handleSignOut = () => {
    logOut()
      .then((Result) => {})
      .catch((error) => {});
  };

  return (
    <div className="navbar flex items-center justify-evenly md:px-36 lg:px-36">
      <div>
        <Link to="/">
          <img className="h-16 object-contain" src={logo} alt="" />
        </Link>
      </div>

      <div className="text-black  p-4 rounded-lg">
        <NavLink
          className="ml-16 motion-safe:hover:scale-110 hover:border-y-2 border-gray-400 transition duration-500"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-gray-400 transition duration-500"
          to="/courses"
        >
          Courses
        </NavLink>
        <NavLink
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-gray-400 transition duration-500"
          to="/profile"
        >
          Profile
        </NavLink>
        <NavLink
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-gray-400 transition duration-500"
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-gray-400 mr-16 transition duration-500"
          to="/faq"
        >
          FAQ
        </NavLink>
      </div>

      <div className="flex-none gap-4">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="">
              {user ? (
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-12 rounded-full border-2 border-gray-400"
                />
              ) : (
                <FaUser className="text-2xl" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-6 shadow menu menu-compact dropdown-content bg-black rounded-box w-52"
          >
            <li>
              <Link
                to="/profile"
                className="justify-center font-bold border-b-2 text-white ransform hover:scale-110 motion-reduce:transform-none text-center "
              >
                {user?.displayName ? (
                  <span className="text-white text-md">{user?.displayName}</span>
                ) : (
                  "No user data"
                )}
              </Link>
            </li>
            {user && user?.uid ? (
              <li>
                <Link to="/login">
                  <button onClick={handleSignOut} className="btn mt-10">
                    Sign out
                  </button>
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <button className="btn btn-warning btn-outline my-1 w-full">Sign in</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
