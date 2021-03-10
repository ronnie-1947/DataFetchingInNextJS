import '../styles/globals.css'
import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
  
  <React.Fragment>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <Component {...pageProps} />
  </React.Fragment>
  )
}

export default MyApp
