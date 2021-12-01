import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import styled from "styled-components";
import tw from "twin.macro";
import { HomePage } from "./app/components/homepage";
import { Footer } from "./app/components/footer";
import { InformationPage } from "./app/components/informationPage";
import { NavBar } from "./app/components/navbar";
import { MyAccount } from "./app/components/myAccount";
import { ShopGear } from "./app/components/shop";
import { Connect } from "./app/components/connect";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
`}
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/howitworks" element={<InformationPage />} />
          <Route path="/shopGear" element={<ShopGear />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/myAccount" element={<MyAccount />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
