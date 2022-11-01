import React from "react";
import Header from "../header/Header";
import {HomePageCreate} from "./createFirstSection/HomePageCreate";
import FlexibleNoCode from "./flexibleNoCodeSection/FlexibleNoCode";
import HowItWork from "./howItWorkSection/HowItWork";
import PopularCollection from "./popularCollectionSection/PopularCollection";
import CitizenDeveloper from "./citizenDeveloperSection/CitizenDeveloper";
import AccordianHome from "./faqSection/AccordianHome";
import Footer from "../footer/Footer";

export const HomePage = () => {
  return (
    <>
    <Header/>
     <HomePageCreate /> 
      <FlexibleNoCode />
      <HowItWork />
      <PopularCollection />
      <CitizenDeveloper />
      <AccordianHome /> 
      <Footer/>
    </>
  );
};

