import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Main from "../comp/main";

const Html = () => {
  return (
    <>
      <Header/>
      <Main pageName="html page" ok="potato" />
      <Footer/>
    </>
  );
};

export default Html;
