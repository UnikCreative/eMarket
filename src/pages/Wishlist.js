import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import React from "react";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title=" Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper py-5">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-wrapper-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="Cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src="images/iphone3.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="wishlist-details py-3">
              <h5 className="title">
                        iPhone 13 Pro 300GB RAM ROM 7 Inch with Wi-Fi+3G Tablet
                    </h5>
                    <div className="d-flex py-4">
                    <h6 className="price text-danger">
                        $ 500
                    </h6>
                    <h6 className="px-3 text-secondary"> <del>$200</del>  </h6>
                    </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-wrapper-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="Cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src="images/iphone1.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="wishlist-details py-3">
              <h5 className="title">
                        iPhone 13 Pro 300GB RAM ROM 7 Inch with Wi-Fi+3G Tablet
                    </h5>
                    <div className="d-flex py-4">
                    <h6 className="px-3"> $200</h6>
                    </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-wrapper-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="Cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src="images/iphone2.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="wishlist-details py-3">
              <h5 className="title">
                        iPhone 13 Pro 300GB RAM ROM 7 Inch with Wi-Fi+3G Tablet
                    </h5>
                    <div className="d-flex py-4">
                    <h6 className="px-3"> $200</h6>
                    </div>
              </div>
            </div>
          </div>
      
      </Container>
    </>
  );
};

export default Wishlist;
