import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container  from "../components/Container";
import { services } from "../utils/Data";
const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-1">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link to="buy" className="button">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 <br/> or $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </Container>
     
     <Container class1="home-wrapper-2 py-5">
     <div className="row">
            <div className="col-12">
              <div className="servic-wrapper d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center px-2 gap-15" key={j}>
                  <img className="img-fluid" src={i.image} alt="services" />
                  <div>
                  <h6>{i.title}</h6>
                    <p> {i.tagline} </p>
                  </div>
                </div>
                );
              })}

              </div>
            </div>
          </div>
     </Container>

    <Container class="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-itmes-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-itmes-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-itmes-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-itmes-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap-30 align-itmes-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-itmes-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-itmes-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-itmes-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

              </div>
            </div>
          </div>
    </Container>

     <Container class="famous-wrapper py-5 home-wrapper-2">
     <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/watch-black.jpg" className="img-fluid" alt="watch" />
              <div className="famous-content position-absolute">
              <h5>Big Screen</h5>
              <h6>Smart watch series 7</h6>
              <p>From $16.62/mo for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/watch.jpg" className="img-fluid" alt="watch" />
              <div className="famous-content position-absolute">
              <h5>Big Screen</h5>
              <h6>Smart watch series 7</h6>
              <p>From $16.62/mo for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/watch-black.jpg" className="img-fluid" alt="watch" />
              <div className="famous-content position-absolute">
              <h5>Big Screen</h5>
              <h6>Smart watch series 7</h6>
              <p>From $16.62/mo for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/watch-black.jpg" className="img-fluid" alt="watch" />
              <div className="famous-content position-absolute">
              <h5>Big Screen</h5>
              <h6>Smart watch series 7</h6>
              <p>From $16.62/mo for 24 mo.</p>
              </div>
            </div>
          </div>
        </div>
     </Container>

   
      <Container class1="special-wrapper home-wrapper-2 py-5">
       
          <div className="row">
          <div className="col-12">
              <div className="section-heading">Special Product</div>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper">
     
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Our Popular Products</div>
            </div>
            
          </div>

          {/* <div className="row">
            <div className="col-2">
              <div className="card"></div>
            </div>
            <div className="col-2">
              <div className="card"></div>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div> */}
       
      </Container>

      <Container className="marquee-wrapper py-5">
  
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
            </Marquee>
              </div>
            </div>
          </div>
        
      </Container>

      <Container className="featured-wrapper py-5 home-wrapper">
       
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Our Latest Blog</div>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        
      </Container>

      <Container className="blog-wrapper py-5 home-wrapper">
        
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Our Latest Blog</div>
            </div>
           
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
       
      </Container>

     
    </>
  );
};

export default Home;
