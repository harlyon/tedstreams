import React from "react";
import Card from "../components/card";
import BreadCrumb from "../components/breadcrumb";

const SafetyProducts = () => {
  return (
    <>
      <BreadCrumb title="Safety Products" />
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default SafetyProducts;
