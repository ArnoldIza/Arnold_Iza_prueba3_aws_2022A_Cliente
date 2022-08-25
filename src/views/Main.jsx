import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

const Main = () =>{
    

    return(
        <div>
            <h1> Welcome to Pirate Crew</h1>
            <div className='Inicio'>
            <Register/>
            <Login/>
            </div>
        </div>
    )
} 

export default Main;