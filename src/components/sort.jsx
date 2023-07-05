import React from "react";

const Sort = ({ getCategoryOptions, handleCategoryClick }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="btn-group-justified btn-group-expand-lg mb-10">
            <div className="btn-group dropdown">
              <button
                className="btn btn-sm w-100 btn-outline-border dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Sort by
              </button>
              <ul className="dropdown-menu w-100">
                {getCategoryOptions.map((category) => (
                  <li key={category}>
                    <a
                      className="dropdown-item"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
