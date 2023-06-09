import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {AiTwotoneHome, AiOutlineMail } from "react-icons/ai";
import {BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
     <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />

      <Container className='contact-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.841278055435!2d8.332290213996366!3d4.9660380963948425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106787d2b0e530b5%3A0x26ac4dfc0d7701e3!2sSEASHORE%20LEADERSHIP%20INITIATIVE!5e0!3m2!1sen!2sng!4v1677610350599!5m2!1sen!2sng" width="600" height="450" 
            className='border-0 w-100'
             allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                      <div>
                        <input type="text" className='form-control'
                        placeholder='Name' />
                      </div>
                      <div>
                        <input type="email" className='form-control'
                        placeholder='Email' />
                      </div>
                      <div>
                        <input type="tel" className='form-control'
                        placeholder='Number' />
                      </div>
                      <div>
                        <textarea 
                        name='' id=''
                         className='w-100 form-control' cols="30"
                          row="4"
                          placeholder='Comments'>
                        </textarea>
                      </div>
                      <div>
                        <button className='button border-0'>Submit</button>
                      </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title'>Get in touch</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiTwotoneHome  className='fs-5'/>
                        <address className='mb-0' >
                          No. 13 Ibom Layout, Calabar Cross River State, Nigeria
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall  className='fs-5'/>
                        <a href='tel:+2348118982337'>+2348118982337</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href='mailto:dejoesco@gmail.com'>dejoesco@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Monday - Friday 10 Am - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
    </>    
  )
}

export default Contact