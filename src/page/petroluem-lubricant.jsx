import React from "react";
import Card from "../components/card";
import BreadCrumb from "../components/breadcrumb";
import { lubricantData } from "../data/data";

const PetroluemProducts = () => {
  return (
    <>
      <BreadCrumb title="Petroluem Products" />
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            {lubricantData.map((data, index) => {
              return <Card key={index} data={data} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PetroluemProducts;
