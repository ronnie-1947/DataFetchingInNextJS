import fs from 'fs/promises'
import path from 'path'

import React from 'react'
import Link from 'next/link'

const HomePage = ({products}) => {

  return (
    <ul>
      {products.map(c=><li key={c.id}><Link href={'/product/'+c.id}>{c.title}</Link></li>)}
    </ul>
  )
}

export async function getStaticProps(context){
  
  const curPath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const rawData = await fs.readFile(curPath, 'utf8')
  const data = JSON.parse(rawData)

  if(data.products.length===0){
    return {
      notFound: true // Get 404 page if no data found
    }
  }

  if(!data){
    return {
      redirect: {
        destination: '/noData' // Redirect to the destination page
      }
    }
  }
  
  return {
    props: {
      products: data.products
    },
    revalidate: 10 // Page builds up in every 10 secs in production for incoming of new data
  }
}

export default HomePage
