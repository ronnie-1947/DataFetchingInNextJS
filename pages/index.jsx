import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const HomePage = () => {


    const imgLoader = ({src, width, quality})=>{
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <React.Fragment>

            <Head>
                <title>Home Page</title>
                <meta name="description" content="Find a lot of great events that allow you to evolve..."/>
            </Head>

            <h1>Data Fetching with NextJS</h1>

            <Image loader={imgLoader} src="https://images.pexels.com/photos/7036453/pexels-photo-7036453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="random" quality={10} width={500} height={500}/>
            {/* <img src="https://images.pexels.com/photos/7036453/pexels-photo-7036453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="random" width={500} height={500}/> */}

            <ul>
                <li><Link href="/product">Static site Generation</Link></li>
                <li><Link href="/userProfile">Server side Rendering</Link></li>
            </ul>
        </React.Fragment>
    )
}

export default HomePage
