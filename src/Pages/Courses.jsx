import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="flex justify-evenly">
      <div className=" mt-10 md:mt-12 lg:mt-16">
        <Categories></Categories>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16 mx-auto">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
