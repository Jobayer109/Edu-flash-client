import React, { useContext } from "react";
import { FaEnvelope, FaIdBadge, FaPhone } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthProvider";

const Profile = () => {
const {user} = useContext(AuthContext)


  return (
    <div className="max-w-lg mx-auto border p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 mb-40 mt-24 rounded-md bg-slate-400">
      <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
        <img
          src={user?.photoURL}
          alt=""
          className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
        </div>
        <div className="space-y-1">
          <span className="flex items-center space-x-2 font-bold">
            <FaEnvelope />
            <span className="dark:text-gray-400">{user?.email}</span>
          </span>
          <span className="flex items-center space-x-2 font-bold">
            <FaIdBadge className="mr-2" />
            {user?.emailVerified ? "verified" : "not verified"}
          </span>
          <span className="flex items-center space-x-2 font-bold">
            <FaPhone />
            <span className="dark:text-gray-400">+880 17*******</span>
          </span>
        </div>
        <div className="text-end mt-4">
          <span>
            <button className="btn btn-sm w-36 mt-4">Update profile</button>
          </span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
