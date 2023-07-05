import React from "react";

const Card = ({ data }) => {
  const { title, image } = data;
  return (
    <>
      <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div className="card mb-7" data-toggle="card-collapse">
          <div
            className="card-img flickity-enabled"
            data-flickity='{"draggable": false}'
            id="productOneImg"
            tabIndex={0}
          >
            <div className="flickity-viewport" style={{ height: "246.5px" }}>
              <div
                className="flickity-slider"
                style={{ transform: "translateX(-200%)" }}
              >
                <a
                  className="d-block w-100 flickity-cell is-selected"
                  href="#/"
                  style={{ transform: "translateX(200%)" }}
                >
                  <img className="card-img-top" src={image} alt="..." />
                </a>
              </div>
            </div>
          </div>
          {/* Collapse */}
          <div className="card-collapse-parent">
            {/* Body */}
            <div className="card-body px-0 pb-0 bg-white">
              <div className="row gx-0">
                <div className="col">
                  {/* Title */}
                  <a className="d-block fw-bold text-body" href="product.html">
                    {title}
                  </a>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div className="card-collapse collapse">
              <div className="card-footer px-0 bg-white">
                <form>
                  <div className="mb-1">
                    <div className="form-check form-check-inline form-check-color">
                      <input
                        type="radio"
                        id="productOneColorOne"
                        name="productOneColor"
                        className="form-check-input"
                        data-toggle="flickity"
                        data-target="#productOneImg"
                        data-slide={0}
                        style={{ backgroundColor: "beige" }}
                        defaultChecked
                      />
                    </div>
                    <div className="form-check form-check-inline form-check-color ms-n2">
                      <input
                        type="radio"
                        id="productOneColorTwo"
                        name="productOneColor"
                        className="form-check-input"
                        data-toggle="flickity"
                        data-target="#productOneImg"
                        data-slide={1}
                        style={{ backgroundColor: "black" }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
