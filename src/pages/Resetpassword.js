import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Meta from "../components/Meta";

const Resetpassword = () => {
  return (
    <>
    <Meta title={"Reset Password"} />
      <BreadCrumb title=" Reset Password" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mt-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-30">
                  
                  <CustomInput  typ="password"
                      name="password"
                      placeholder="Password" />
                  
                  <CustomInput  typ="password"
                      name="confpassword"
                      placeholder="Confirm Password"/>
                  
                 
                  
                  <div>
                    <div className=" mt-3 d-flex justify-content-center gap-15 border-0">
                      <button className="button border-0">Ok</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      
      </Container>
    </>
  )
}

export default Resetpassword