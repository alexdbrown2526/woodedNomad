import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { InformationPage } from "../../components/informationPage";
import { NavBar } from "../../components/navbar";
import { MyAccount } from "../../components/myAccount";
import { ShopGear } from "../../components/shop";
import { Connect } from "../../components/connect";
import { useRoutes, A } from "hookrouter";

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

const routes = {
  "/howitworks": () => <InformationPage />,
  "/shopGear": () => <ShopGear />,
  "/connect": () => <Connect />,
  "/myAccount": () => <MyAccount />,
};

export function HomePage() {
  const routeResult = useRoutes(routes);
  return (
    <PageContainer>
      <NavBar />
      <A href="/howitworks">
        <InformationPage />
      </A>
      <A href="/shopGear">
        <ShopGear />
      </A>
      <A href="/connect">
        <Connect />
      </A>
      <A href="/myAccount">
        <MyAccount />
      </A>
      {routeResult}

      <Footer />
    </PageContainer>
  );
}
