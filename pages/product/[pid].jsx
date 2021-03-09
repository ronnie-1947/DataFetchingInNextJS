// Importing NodeJs Dependencies
import fs from 'fs/promises'
import path from 'path'

// Importing React Dependencies
import { Fragment } from 'react'

const ProductDetailPage = ({loadedProduct}) => {

    if(!loadedProduct){ // Saves from Error wehere Data not fetched before
        return <h1>Loading...</h1>
    }

    return (
        <Fragment>
            <h1>Hello This is {loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    )
}

async function getData(){
    const curPath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const rawData = await fs.readFile(curPath, 'utf8')
    const data = JSON.parse(rawData)
    return data
}

export async function getStaticProps(context) {

    const {params} = context
    const prodId = params.pid

    const data = await getData()

    const product = data.products.find(prod=>prod.id === prodId)

    if(!product){
        return {
            redirect: {
                destination: '/product'
            }
        }
    }

    return {
        props: {
            loadedProduct: product
        }
    }
}

export async function getStaticPaths(){

    const data = await getData()
    const params = data.products.map(cur=>({params: {pid: cur.id}}))
    
    return {
        paths: params,
        fallback: true // 
        // fallback: 'blocking' // Generate in the server before sending to client
    }
}


export default ProductDetailPage


