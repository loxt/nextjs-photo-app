import '../styles/globals.scss'
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

