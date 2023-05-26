import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import StarRatings from "react-star-ratings";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
//   alert(grid);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />

      <Container class1="store-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title"> Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />

                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />

                      <label className="form-check-label" htmlFor="">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title"> Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title"> Colors</h5>
                  <div>
                    <div>
                     <Color />
                    </div>
                  </div>

                  <h5 className="sub-title"> Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color1"
                      />

                      <label className="form-check-label" htmlFor="color1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color2"
                      />

                      <label className="form-check-label" htmlFor="color2">
                        M (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color3"
                      />

                      <label className="form-check-label" htmlFor="color3">
                        L (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color4"
                      />

                      <label className="form-check-label" htmlFor="color4">
                        XL (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color5"
                      />

                      <label className="form-check-label" htmlFor="color5">
                        XXL (0)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Oppo
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Speaker
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tablet
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Vivo
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products d-flex align-items-center justify-content-center">
                    <div className="w-50">
                      <img
                        src="images/watch1.jpg"
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50 ">
                      <h5>
                        Kids headphones bulk 10m packs multi colored for stundet
                      </h5>
                      <StarRatings
                        rating={4}
                        starDimension="14px"
                        starSpacing="5px"
                        starRatedColor="orange"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                  <div className="random-products d-flex align-items-center justify-content-center">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50 ">
                      <h5>
                        Kids headphones bulk 10m packs multi colored for stundet
                      </h5>
                      <StarRatings
                        rating={4}
                        starDimension="14px"
                        starSpacing="5px"
                        starRatedColor="orange"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically. A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically. Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center grid">
                    <p className="total-products mb-0">21 Products</p>
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      alt="grid"
                      className="img-fluid d-block"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      alt="grid"
                      className="img-fluid d-block"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      alt="grid"
                      className="img-fluid d-block"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      alt="grid"
                      className="img-fluid d-block"
                    />
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  );
};

export default OurStore;
