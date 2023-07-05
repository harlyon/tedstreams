import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <>
      <nav className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Breadcrumb */}
              <ol className="breadcrumb mb-0 fs-xs text-gray-400">
                <li className="breadcrumb-item">
                  <Link className="text-reset" to="/">
                    Home
                  </Link>
                </li>
                <i className="fa fa-arrow-right" style={{ padding: "3px" }} />
                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-7">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-10 text-center">{title}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCrumb;
