import React, { useContext } from "react";
import { FaUserSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
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
    <div className="navbar flex items-center justify-between px-36 mt-0">
      <div className="">
        <Link to="/">
          <img className="h-16" src={logo} alt="" />
        </Link>
      </div>

      <div className="  text-black font-thin  p-4 rounded-lg">
        <Link className="ml-16 motion-safe:hover:scale-110 hover:border-y-2 border-black" to="/">
          Home
        </Link>
        <Link
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-black"
          to="/courses"
        >
          Courses
        </Link>
        <Link
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-black"
          to="/profile"
        >
          Profile
        </Link>
        <Link
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-black"
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-black mr-16"
          to="/faq"
        >
          FAQ
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-12 rounded-full border-2 border-gray-400">
              {user && user?.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <FaUserSlash className="h-10 w-10" />
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
                <button onClick={handleSignOut} className="btn btn-error btn-outline mt-10">
                  Sign out
                </button>
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
