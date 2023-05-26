import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import StarRatings from "react-star-ratings";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import {TbGitCompare} from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "/images/hp-spectre2.jpg",
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />

      <Container class1="main-product-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-image d-flex gap-15 flex-wrap">
                <div>
                  <img
                    src="/images/hp-spectre2.jpg"
                    alt="laptop"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="/images/hp-spectre3.jpg"
                    alt="laptop"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="/images/hp-spectre4.jpg"
                    alt="laptop"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="/images/hp-spectre5.jpg"
                    alt="laptop"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Hp Spectre 360x Multiple colors 2023 edition
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <StarRatings
                      rating={4}
                      starDimension="20px"
                      starSpacing="5px"
                      starRatedColor="orange"
                    />
                    <p className="mb-0 t-review"> (2 Reviews) </p>
                  </div>

                  <a href="#review" className="review-btn">
                    Write a review
                  </a>
                </div>

                <div className=" py-3">
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Laptop</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">hp</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Laptop</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">hp spectre 360x</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div>
                      <input
                        type="number"
                        name="number"
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className=" d-flex align-items-center gap-30">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button className="button signup border-0">
                        Buy It Now
                      </button>
                    </div>
                  </div>
                     <div className="d-flex align-items-center gap-15">
                      <div>
                        <a href="">
                         <TbGitCompare className="fs-5 me-2" /> Add to Compare
                        </a>
                      </div>
                      <div>
                        <a href="">
                         <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                        </a>
                      </div>
                    </div>

                    <div className="d-flex gap-10 flex-column  my-3">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data">
                      Free shipping and returns available on orders! <br />
                      We ship all US domestic orders with 
                      <b>5-10 business days</b>
                    </p>
                  </div>
                    <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link :</h3>
                    <a href="javascript:void(0)" onClick={()=> {
                      alert("Link Copied");
                      copyToClipboard("/images/hp-spectre2.jpg");
                    }}>
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups. Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual
                  mockups. Lorem ipsum is placeholder text commonly used in the
                  graphic, print, and publishing industries for previewing
                  layouts and visual mockups.
                </p>
              </div>
            </div>
          </div>
       
      </Container>

      <Container class1="review-wrapper home-wrapper-2 ">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2"> Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <StarRatings
                        rating={4}
                        starDimension="20px"
                        starSpacing="5px"
                        starRatedColor="orange"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>

                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write Review
                      </a>
                    </div>
                  )}
                </div>

                <div className="review-form py-4">
                  <h4> Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <StarRatings
                        rating={5}
                        starDimension="20px"
                        starSpacing="5px"
                        starRatedColor="orange"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        row="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>

                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <StarRatings
                        rating={4}
                        starDimension="20px"
                        starSpacing="5px"
                        starRatedColor="orange"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries for previewing
                      layouts and visual mockups. Lorem ipsum is placeholder
                      text commonly used
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Our Popular Products</div>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <div className="card"></div>
            </div>
            <div className="col-2">
              <div className="card"></div>
            </div>
            <ProductCard />
            <ProductCard />
          </div>
        
      </Container>
    </>
  );
};

export default SingleProduct;
