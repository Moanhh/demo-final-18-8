import logo from "../../assets/images/logos/flash-card.jpg";
import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon,  } from "cdbreact";

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-3 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/#" className="d-flex align-items-center p-2 text-dark">
            <img
              alt="logo"
              src ={logo}  
              width="50px"
              
            />
            <span className="ml-9 h5 mb-0 font-weight-bold">Flash Card</span>
          </a>
          
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;