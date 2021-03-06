import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Connect } from "../connect";
import { InformationPage } from "../informationPage";
import { Logo } from "../logo";
import { MyAccount } from "../myAccount";
import { ShopGear } from "../shop";
import { NavItems } from "./navitems";
import { HomePage } from "../homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

export function NavBar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-red-400">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          //xmlns={logo}
        ></svg>
        <Link to="/">
          <span class="font-semibold text-xl tracking-tight">Wooded Nomad</span>
        </Link>
      </div>
      <div class="block lg:hidden"></div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link to="/shopGear">Shop Gear </Link>

          <Link to="/howitworks">How it works</Link>

          <Link to="/connect">Connect</Link>
        </div>
        <div>
          <Link to="/myAccount">
            <div
              class="inline-block text-sm px-4 py-2 leading-none border rounded
          text-white border-white hover:border-transparent hover:text-teal-500
          hover:bg-white mt-4 lg:mt-0"
            >
              My Account
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
