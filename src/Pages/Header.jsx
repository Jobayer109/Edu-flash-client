import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { AuthContext } from "../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  //User log out.
  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar flex items-center justify-evenly md:px-36 lg:px-36 bg-orange-600 h-1">
      <div className="navbar-start">
        <Link to="/">
          <img className="h-16 object-contain" src={logo} alt="" />
        </Link>
      </div>

      <div className="text-black p-4 rounded-lg navbar-center">
        <Link
          className="ml-16 motion-safe:hover:scale-110 hover:border-y-2 border-gray-400 transition duration-500 text-white"
          to="/"
        >
          Home
        </Link>
        <Link
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-gray-400 transition duration-500 text-white"
          to="/courses"
        >
          Courses
        </Link>
        <Link
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-gray-400 transition duration-500 text-white"
          to="/profile"
        >
          Profile
        </Link>
        <Link
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-gray-400 transition duration-500 text-white"
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          className="ml-8 motion-safe:hover:scale-110 hover:border-y-2 border-gray-400 mr-16 transition duration-500 text-white"
          to="/faq"
        >
          FAQ
        </Link>
      </div>
      <div className="navbar-end">
        <div>
          {" "}
          {user?.photoURL && (
            <div className="avatar mr-4 hidden sm:block md:block lg:block">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          )}
        </div>

        <div>
          {user ? (
            <Link to="/login">
              <button
                onClick={handleSignOut}
                className="border px-4 py-2 font-medium bg-white hover:border-black text-black rounded-sm hidden sm:block md:block lg:block"
              >
                Sign out
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="border px-4 py-2 font-medium bg-white hover:border-black text-black rounded-sm hidden sm:block md:block lg:block">
                Sign in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
