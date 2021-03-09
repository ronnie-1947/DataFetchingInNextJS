import React from 'react'

const userIdPage = ({id}) => {
    return (
        <div>
            <h1>{id}</h1>
            <p>Hello , This page is rendered in the server, before presented to the client</p>
        </div>
    )
}

export async function getServerSideProps({params, req, res}){

    const userId = params.uid

    return {
        props: {
            id: 'userid-'+userId
        }
    }

}

export default userIdPage
