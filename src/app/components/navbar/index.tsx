import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Connect } from "../connect";
import { InformationPage } from "../informationPage";
import { Logo } from "../logo";
import { MyAccount } from "../myAccount";
import { ShopGear } from "../shop";
import { NavItems } from "./navitems";
import { HomePage } from "../../containers/HomePage";

const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
        w-full
        max-w-2xl
        flex
        flex-row
        items-center
        lg: pl-12
        lg: pr-12
        justify-between
    `}
`;

const LogoContainer = styled.div``;

export function NavBar() {
  return <NavBarContainer></NavBarContainer>;
}
