import '../styles/globals.css'
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import React from "react";

function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
