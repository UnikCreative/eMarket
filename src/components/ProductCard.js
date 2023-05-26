import React from "react";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch1.jpg";
import wish from "../images/wish.svg";
import ProCompare from "../images/prodcompare.svg";
import ProView from "../images/view.svg";
import ProCart from "../images/add-cart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  const location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button  className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch}
              className="img-fluid"
              alt="product-img"
            />
            <img
              src={watch1}
              className="img-fluid"
              alt="product-img"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kid headphones bulk 10 packs multi player
            </h5>

            <StarRatings
              rating={3}
              starDimension="20px"
              starSpacing="10px"
              starRatedColor="orange"
            />
             <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum is placeholder text commonly used in the graphic, print, 
              and publishing </p>
            <p className="price">$100.00 </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button  className="border-0 bg-transparent" >
                <img src={ProCompare} alt="Compare" />
              </button>
              <button  className="border-0 bg-transparent" >
                <img src={ProView} alt="View" />
              </button>
              <button   className="border-0 bg-transparent">
                <img src={ProCart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to="/product/:id"
        
        className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button  className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch}
              className="img-fluid"
              alt="product-img"
            />
            <img
              src={watch1}
              className="img-fluid"
              alt="product-img"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kid headphones bulk 10 packs multi player
            </h5>

            <StarRatings
              rating={3}
              starDimension="20px"
              starSpacing="10px"
              starRatedColor="orange"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum is placeholder text commonly used in the graphic, print, 
              and publishing </p>
            <p className="price">$100.00 </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button  className="border-0 bg-transparent">
                <img src={ProCompare} alt="Compare" />
              </button>
              <button  className="border-0 bg-transparent">
                <img src={ProView} alt="View" />
              </button>
              <button  className="border-0 bg-transparent">
                <img src={ProCart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
