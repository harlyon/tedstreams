import React from "react";

const Header = () => {
  return (
    <>
      <section>
        <div className="container">
          <div
            className="bg-cover row justify-content-center py-14"
            style={{
              backgroundImage:
                "url(https://tedstreams.com/wp-content/uploads/2023/07/Frame-7.png)",
            }}
          >
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              {/* Heading */}
              <h1 className="mb-0 text-center text-white">
                Excellence in quality, Service, and Reliability!
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6">
        <div className="container">
          <div className="row">
            <div className="text-center col-12">
              {/* Heading */}
              <h2 className="mb-10">We are Tedstreams. Lets Be your Partner</h2>
            </div>
          </div>
          <div className="text-gray-500 row justify-content-center mb-9 fs-lg">
            <div className="col-12 col-md-5">
              <p className="mb-10 text-gray-500 style">
                At Tedstreams, we take pride in providing high-quality medical
                products, petroleum lubricants, and safety wears to meet the
                diverse needs of our customers. With years of industry
                experience, we have established ourselves as a trusted supplier
                in these sectors.
              </p>
            </div>
            <div className="text-gray-500 col-12 col-md-6 col-lg-5 fs-lg">
              <p className="mb-10 text-gray-500 style">
                We offer a diverse range of products to cater to your specific
                requirements. Whether you're a healthcare professional, an
                industrial worker, or a business owner, you'll find everything
                you need under one roof. From medical disposables and
                pharmaceuticals to industrial lubricants and safety gears, we
                have you covered
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
              {/* Preheading */}
              <h6 className="heading-xxs mb-3 text-gray-400">New Collection</h6>
              {/* Heading */}
              <h2 className="mb-4">Best Picks 2019</h2>
              {/* Subheading */}
              <p className="mb-10 text-gray-500 style">
                Appear, dry there darkness they're seas, dry waters thing fly
                midst. Beast, above fly brought Very green.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
              {/* Card */}
              <div
                className="card mb-7 text-white"
                style={{
                  minHeight: 400,
                  backgroundImage:
                    "url(https://tedstreams.com/wp-content/uploads/2023/06/metal-cutting-514x385.jpeg)",
                }}
              >
                {/* Background */}
                <div className="card-bg">
                  <div
                    className="card-bg-img bg-cover"
                    style={{
                      backgroundImage:
                        "url(https://tedstreams.com/wp-content/uploads/2023/06/metal-cutting-514x385.jpeg)",
                    }}
                  />
                </div>
                {/* Body */}
                <div className="card-body my-auto text-center">
                  {/* Heading */}
                  <h4 className="mb-0">
                    industrial Lubricants <br /> Metal Works Fluid
                  </h4>
                  {/* Link */}
                  {/* <a
                    className="btn btn-link stretched-link text-reset"
                    href="shop.html"
                  >
                    Shop Now <i className="fe fe-arrow-right ms-2" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
              {/* Card */}
              <div className="card mb-7 text-body" style={{ minHeight: 400 }}>
                {/* Background */}
                <div className="card-bg">
                  <div
                    className="card-bg-img bg-cover"
                    style={{
                      backgroundImage:
                        "url(https://tedstreams.com/wp-content/uploads/2023/06/anti-seize-514x385.jpeg)",
                    }}
                  />
                </div>
                <div className="card-body my-auto px-md-10 text-center text-md-start">
                  <h4 className="mb-0 text-white">Greases</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
              {/* Card */}
              <div
                className="card mb-7 mb-md-0 text-body"
                style={{ minHeight: 400 }}
              >
                {/* Background */}
                <div className="card-bg">
                  <div
                    className="card-bg-img bg-cover"
                    style={{
                      backgroundImage:
                        "url(https://www.docsurge.co.za/wp-content/uploads/2020/12/https___www.lifeofpix.com_wp-content_uploads_2018_04_p-270-jira0513-chim-fon-1-2-1.jpg)",
                    }}
                  />
                </div>
                {/* Body */}
                <div className="card-body my-auto px-md-10 text-center text-md-start">
                  {/* Heading */}
                  <h4 className="mb-0 text-white">Medical Supplies</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
              {/* Card */}
              <div className="card text-white" style={{ minHeight: 400 }}>
                {/* Background */}
                <div className="card-bg">
                  <div
                    className="card-bg-img bg-cover"
                    style={{
                      backgroundImage:
                        "url(https://safetywearspecialist.co.za/wp-content/uploads/2021/08/Home-page.png)",
                    }}
                  />
                </div>
                {/* Body */}
                <div className="card-body my-auto text-center">
                  {/* Heading */}
                  <h4 className="mb-0 text-white">Safety PPE</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br />
    </>
  );
};

export default Header;
