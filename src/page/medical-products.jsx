import React, { useState, useEffect } from "react";
import Card from "../components/card";
import BreadCrumb from "../components/breadcrumb";
import { medicalData } from "../data/data";
import Sort from "../components/sort";

const MedicalProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getCategoryOptions = () => {
    const uniqueCategories = [
      ...new Set(medicalData.map((data) => data.category)),
    ];
    return ["All", ...uniqueCategories]; // Include "All" option
  };

  useEffect(() => {
    if (selectedCategory === "" || selectedCategory === "All") {
      setFilteredData(medicalData); // Show all items
    } else {
      const newData = medicalData.filter(
        (data) => data.category === selectedCategory
      );
      setFilteredData(newData);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <BreadCrumb title="Medical Products" />
      <Sort
        handleCategoryClick={handleCategoryClick}
        getCategoryOptions={getCategoryOptions()}
      />
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            {filteredData.map((data, index) => {
              return <Card key={index} data={data} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicalProducts;
