import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";
import Blog1 from "../images/blog-1.jpg";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title=" Dynamic Blog Name" />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                </Link>
                <h3 className="title">A Beautifyl Sunday morning</h3>
                <img src={Blog1} 
                className="img-fluid w-100 my-4"
                alt="blog" />
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
    </>
  );
};

export default SingleBlog;
