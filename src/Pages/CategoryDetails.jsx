import React from "react";
import { FaBackward, FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryDetails = ({ categoryDetails }) => {
  console.log(categoryDetails);
  const { course_name, details, Instructor, comment, fee, img, rating, lessons } = categoryDetails;

  return (
    <div>
      <div className="max-w-sm w-full lg:max-w-[80%] lg:mx-auto lg:flex border-2 rounded-lg p-8 mt-8 mb-24">
        <div className=" h-48 lg:h-60 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <Link to="/courses">
            <FaBackward className="text-3xl ml-6 text-white bg-black p-1 rounded-lg motion-safe:hover:scale-110" />
          </Link>
          <img className="h-60 rounded-xl" src={img} alt="" />
        </div>
        <div className=" lg:border-gray-400 w-[70%] mx-auto bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center justify-end">
              <FaFilePdf className="text-4xl text-red-600 motion-safe:hover:scale-110"></FaFilePdf>
            </p>
            <div className="text-gray-900 font-mono font-bold text-xl mb-2">{course_name}</div>
            <p className="text-gray-700 text-base text-justify">{details}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4 border border-black"
              src={Instructor.photo}
              alt=""
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none font-semibold">{Instructor.name}</p>
              <p className="text-gray-600 font-thin">{Instructor.designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
