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

//save for future styled component
const PageContainer = styled.div`
  ${tw`
        
    `}
`;

export function HomePage() {
  return (
    <div>
      <h4 class="text-center font-thin text-4xl">Wooded Nomad</h4>
      <div class="min-h-screen min-w-screen flex items-center justify-center">
        <div class="flex flex-col shadow-xl">
          <div class="py-6 px-14 bg-green-400 text-center space-y-8">
            <h2 class="text-white text-xl uppercase">Join our newsletter</h2>
            <h4 class="text-white text-center font-bold text-lg">
              Don't miss out on updates and promotions! Sign up now to recieve
              the latest
              <br />
              updates and most exclusive offers.
            </h4>
          </div>
          <div class="flex flex-col py-6 px-8 space-y-5 bg-white">
            <input
              type="text"
              placeholder="Enter email"
              class="px-2 py-2 border-2 border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent"
            />
            <button class="w-full py-3 bg-gray-400 text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-lg">
              Sign me up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
