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

const Search = () => (
  <div className={styles.searchbar}>
    <form>
      <input type="text" placeholder="Search here..." className={styles.searchInput} />
      <input type="submit" value="Search" className={styles.searchSubmit} />
    </form>
  </div>
)

class NavSharesensation extends Component {

constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
      isOpen: false,
      isHidden: true
  };
}

toggle() {
  this.setState({
      isOpen: !this.state.isOpen
  });
}

toggleHidden () {
  this.setState({
    isHidden: !this.state.isHidden
  })
}

render() {
  return (
  <div className={styles.fixed}>
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
              <button className={styles.buttonSearch}>
                <i class="fas fa-bell"></i>
              </button>
              <button className={styles.buttonSearch} onClick={this.toggleHidden.bind(this)}>
                <i class="fas fa-search"></i>
              </button>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img className={styles.avatar} src={avatar_img} alt="Avatar" />
                  &nbsp; Samir Benzada
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Profile
                  </DropdownItem>
                  <DropdownItem href="/About"> 
                    Jobs tryed
                  </DropdownItem>
                  <DropdownItem href="/Newjob"> 
                    New Job
                  </DropdownItem>
                  <DropdownItem href="/Messages"> 
                    Messages
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Help
                  </DropdownItem>
                  <DropdownItem>
                    Setting
                  </DropdownItem>
                  <DropdownItem>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        
          {!this.state.isHidden && <Search />}
        
      </div>
        );
    }
}

export default NavSharesensation;
