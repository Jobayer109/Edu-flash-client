import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className=" flex items-center justify-evenly ">
      <div className="">
        <Categories></Categories>
      </div>
      <div className="lg:grid grid-cols-2 gap-10 my-16">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
