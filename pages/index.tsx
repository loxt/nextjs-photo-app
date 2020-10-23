import React from 'react';
import Head from 'next/head';
import Card from '../components/home/card';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Photo App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        {props.data.map((photo, i) => (
          <Card key={i} photo={photo} />
        ))}
      </div>
    </div>
  );
}
