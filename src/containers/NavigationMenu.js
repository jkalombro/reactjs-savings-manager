import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { NavbarBlue, NavItemLink, Navbar, Nav } from '../components/CustomNavbar';
import { FaDollarSign } from 'react-icons/fa';

class NavigationMenu extends Component {
  render() {
    const NavbarMenu = this.props.store.NavbarMenu;
    const isAuthenticated = this.props.store.Session.isAuthenticated;
    NavbarMenu.updateMenuState();

    if(window.location.href.split("/")[3]!=='login' && isAuthenticated===true){
      return (
        <NavbarBlue variant="dark" default collapseOnSelect>
            <Navbar.Brand href="/dashboard"><FaDollarSign />avings Manager</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <NavItemLink isSelected={NavbarMenu.dashboard} href="/dashboard" value="Dashboard" />
                    <NavItemLink isSelected={NavbarMenu.savings} href="/savings" value="Savings" />
                    <NavItemLink isSelected={NavbarMenu.settings} href="/settings" value="Settings" />
                    <NavItemLink isSelected='' href='/login' value='Logout' />
                </Nav>
            </Navbar.Collapse>
        </NavbarBlue>
      )
    }else{
      return <span />
    }
  }
}

export default observer(NavigationMenu);