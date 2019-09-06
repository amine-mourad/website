import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NavbarSection, Logo, LogoText, UlList,ListItem,Anchor} from './style.js';


class Navbar extends Component {
  render() {
    return (
     
      <NavbarSection>
          
          <div className="container">
              
              <Logo>
                  <LogoText>Ultra Profile</LogoText>
              </Logo>
              
              <UlList>
                  <ListItem><Anchor to="/">Home</Anchor></ListItem>
                  <ListItem><Anchor to="/work">Work</Anchor></ListItem>
                  <ListItem><Anchor to="/portfolio">Portfolio</Anchor></ListItem>
                  <ListItem><Anchor to="/profile">Resume</Anchor></ListItem>
                  <ListItem><Anchor to="/about">About</Anchor></ListItem>
                  <ListItem><Anchor to="/contact">Contact</Anchor></ListItem>
              </UlList>
              
          </div>
          
      </NavbarSection>
    )
  }
}

export default Navbar;
