import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";


const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title=" Login" />

      <Container className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mt-3">Login</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput typ="email" name="email" placeholder="Email" />

                <CustomInput
                  typ="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className=" mt-3 d-flex justify-content-center gap-15 border-0">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup border-0">
                      SignUp
                    </Link>
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

export default Login;
