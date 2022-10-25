import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
  return (
    <div className="grid grid-cols-2 gap-10 w-[70%] mx-auto my-16">
          {
              courses.map(course => <Course
                  key={course.id}
                  course={course}
              
              ></Course>)
      }
    </div>
  );
};

export default Courses;
