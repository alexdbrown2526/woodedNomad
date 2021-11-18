import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { InformationPage } from "../../components/informationPage";
import { NavBar } from "../../components/navbar";
import { MyAccount } from "../../components/myAccount";
import { ShopGear } from "../../components/shop";
import { Connect } from "../../components/connect";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
  return <PageContainer></PageContainer>;
}
