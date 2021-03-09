import React from 'react'

const UserProfilePage = ({data}) => {
    console.log(data)
    return (
        <React.Fragment>
            {
                data.map(cur=>(
                    <div key={cur.id} style={{margin:'1rem'}}>
                        <h1>{cur.username}</h1>
                        <p>{cur.email}</p>
                    </div>
                ))
            }
        </React.Fragment>
    )
}

export async function getServerSideProps(context){

    const {params, req, res} = context

    const jsonData = await fetch('https://jsonplaceholder.typicode.com/users') 
    const data = await jsonData.json()

    
    return {
        props: {
            data
        }
    }
}

export default UserProfilePage
