import '../styles/globals.scss';
import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import React, { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/mocks/items.json')
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <>
      <Header />
      <Component data={photos} {...pageProps} />
      <Footer />
    </>
  );
}
