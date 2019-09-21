import React, { Component } from 'react';
import styles from  './Navbar.module.css';
import avatar_img from '../../assets/avatar/avatar.png';
import jobIcon from '../../assets/icons/icon.jpg';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class NavSharesensation extends Component {

constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
    }
    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

render() {
  return (

    <Navbar className={styles.Navbar} expand="md">
          <NavbarBrand href="/">
            <img src={jobIcon} className={styles.jobIcon} alt="icon for jobs" />
            &nbsp;
            Jobs
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/About">About</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/Careers">Careers</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/Donations">Donations</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img className={styles.avatar} src={avatar_img} alt="Avatar" />
                  &nbsp; Samir Benzada
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        );
    }
}

export default NavSharesensation;
