import React, { useRef } from "react";
import { FaDollarSign, FaFilePdf, FaReply, FaStar, FaThumbsUp } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPrint from "react-to-print";


const CourseDetails = () => {
  const ref = useRef()
  const CourseDetails = useLoaderData();
  
  const {id, course_name, details, Instructor, comment, fee, img, rating, lessons } = CourseDetails;
  return (
    <div>
      <div
        ref={ref}
        className="max-w-sm w-full lg:max-w-[70%]  lg:mx-auto lg:flex border-1 shadow-lg rounded-lg p-8 mt-8 mb-24"
      >
        <div className=" h-48 lg:h-60 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img className="h-36 rounded-xl" src={img} alt="" />
        </div>
        <div className=" lg:border-gray-400 w-[80%] mx-auto rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-gray-100 rounded-2xl">
          <div className="mb-8">
            <div className="flex items-center justify-between shadow-sm mb-2 p-1">
              <Link to="/courses">
                <FaReply className="text-3xl text-red-600 text-center p-1 rounded-lg motion-safe:hover:scale-110" />
              </Link>
              <p className="text-sm text-gray-600 flex items-center justify-end">
                <ReactToPrint pageStyle={{page:"A4"}}
                  trigger={() => (
                    <FaFilePdf className="text-4xl text-red-600 motion-safe:hover:scale-110" />
                  )}
                  content={() => ref.current}
                />
              </p>
            </div>
            <div className="rounded-lg mb-3 py-2 flex justify-between">
              <div className="text-gray-900  font-bold text-2xl mb-2">{course_name}</div>
              <div className="flex items-center mb-6">
                <img
                  className="w-10 h-10 rounded-full mr-4 border border-black"
                  src={Instructor.photo}
                  alt=""
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none font-semibold">{Instructor.name}</p>
                  <p className="text-gray-600 font-thin">{Instructor.designation}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-base text-justify">{details}</p>
          </div>

          <div className="stats shadow-lg">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStar className="text-3xl" />
              </div>
              <div className="stat-title">Course rating</div>
              <div className="stat-value">{rating}</div>
              <div className="stat-desc">Jul 1st - Nov 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaThumbsUp className="text-3xl" />
              </div>
              <div className="stat-title">New Users</div>
              <div className="stat-value">{comment}</div>
              <div className="stat-desc">Jul 1st - Nov 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaDollarSign className="text-3xl" />
              </div>
              <div className="stat-title">Course Fee:</div>
              <div className="stat-value">{fee}</div>
              <div className="stat-desc">Jul 1st - Nov 1st</div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-mono font-extrabold shadow-sm">
              Features of this course:
            </h2>
            <div className="flex justify-between items-center">
              {lessons.map((lesson) => (
                <div className="motion-safe:hover:scale-110 bg-slate-500  text-white h-16 w-28 p-2 px-3 text-md rounded-r-full rounded-lg mt-4 py-5 shadow-xl">
                  {" "}
                  {lesson}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 rounded-br-full bg-slate-300 p-6 border-black">
            <p className="text-sm font-mono">
              To get the best and high quality teaching from our platform, <br /> you may explore
              our premium courses.
            </p>
            <Link to='/premium'>
              <button className="btn btn-outline mt-3 w-60 shadow-lg">Get premium access</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
