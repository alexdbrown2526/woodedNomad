import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const NavItem = styled.ul`
  ${tw`
        flex
        list-none`}
`;

const ListContainer = styled.ul`
  ${tw`flex 
       list-none`}
`;

export function NavItems() {
  return (
    <ListContainer>
      <NavItem>
        <a href="#"> Shop Gear</a>
      </NavItem>
      <NavItem>
        <a href="#"> How It Works</a>
      </NavItem>
      <NavItem>
        <a href="#"> Connect</a>
      </NavItem>
      <NavItem>
        <a href="#"> Search</a>
      </NavItem>
    </ListContainer>
  );
}
