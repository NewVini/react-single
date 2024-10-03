import React from 'react';
import {
  NavContainer,
  NavList,
  NavItem,
  NavLink,
  ExternalLink,
} from './Navigation.styles';

const Navigation: React.FC = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink> 
        </NavItem>
        <NavItem>
          <NavLink to="/movies">Filmes</NavLink> 
        </NavItem>
        <NavItem>
          <ExternalLink href="/react-multiple">React multiple</ExternalLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
