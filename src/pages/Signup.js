import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"SignUp"} />
      <BreadCrumb title=" SignUp" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mt-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-30">
                  
                  <CustomInput typ="text"
                      name="name"
                      placeholder="First name" />
                  
                  <CustomInput  typ="text"
                      name="last name"
                      placeholder="Last name" />

                  <CustomInput typ="email"
                      name="email"
                      placeholder="Email" />

                  <CustomInput  typ="password"
                      name="password"
                      placeholder="Password" />

                
                  <div>
                    <div className=" mt-3 d-flex justify-content-center gap-15 border-0">
                      <button className="button border-0">Create</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  );
};

export default Signup;
