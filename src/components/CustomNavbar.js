import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FaUserCog, FaRegChartBar, FaSignOutAlt, FaMoneyBillWave } from 'react-icons/fa';

//-------- STYLED COMPONENTS START ----------------
const NavbarBlue = styled(Navbar)`
  position: sticky !important;
  position: -webkit-sticky !important;
  top: 0;
  background-color : #0054af!important;
  z-index: 1040;
`;

const MyNavLink = styled(Nav.Link)`
  font-weight: 500;
  margin-right: 15px;

  &:hover {
    color: white !important;
  }
`;

const MyNavLinkSelected = styled(MyNavLink)`
  color: white !important;
`;
//-------- STYLED COMPONENTS END ----------------



//------ FUNCTIONAL COMPONENTS START ------------
const MenuIcon = (props) => {
  switch(props.menu) {
    case "Dashboard":
      return <FaRegChartBar />;
    case "Savings": 
      return <FaMoneyBillWave />;
    case "Settings": 
      return <FaUserCog />;
    default: 
      return <FaSignOutAlt />;
  }
}

const NavItemLink = (props) => {
  if(props.value!=='Logout'){
    if(props.isSelected === "selected") {
      return <MyNavLinkSelected href={props.href}><MenuIcon menu={props.value} /> {props.value}</MyNavLinkSelected>;
    }else{
      return <MyNavLink href={props.href}><MenuIcon menu={props.value} /> {props.value}</MyNavLink>;
    }
  }else{
    return <MyNavLink href={props.href}><MenuIcon menu={props.value} /></MyNavLink>
  }
};
//------ FUNCTIONAL COMPONENTS END ------------

export { NavbarBlue, NavItemLink, Navbar, Nav };