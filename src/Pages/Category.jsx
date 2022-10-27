import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";

const Category = () => {
  const categoriesDetails = useLoaderData();

  return (
    <div className="">
      {categoriesDetails.map((categoryDetails) => (
        <CategoryDetails
          key={categoryDetails.id}
          categoryDetails={categoryDetails}
        ></CategoryDetails>
      ))}
    </div>
  );
};

export default Category;
