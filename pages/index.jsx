import React from 'react'
import Link from 'next/link'

const HomePage = () => {
    return (
        <div>
            <h1>Data Fetching with NextJS</h1>

            <ul>
                <li><Link href="/product">Static site Generation</Link></li>
                <li><Link href="/userProfile">Server side Rendering</Link></li>
            </ul>
        </div>
    )
}

export default HomePage
