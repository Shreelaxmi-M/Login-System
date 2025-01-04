import React from 'react'
import { useNavigate } from 'react-router';

function Home() {
  const redirect = useNavigate();
  function handleLogout() {
    //remove email from localstorage
    localStorage.removeItem("email");
    redirect("/");
  }
  return (
    <div className='container'>
      <div className='navbar'>
        <h4>Edstruments</h4>
        <button className='logout' onClick={handleLogout}>Logout</button>
      </div>
      <div className='content'>
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default Home