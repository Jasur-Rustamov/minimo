import React from 'react'

function Navbar() {
  return (
    <div className='font-franc flex container mt-10 justify-between items-center'>
        <div className="logo">
            <a href="#" className='text-4xl'><img src="/images/logo.svg" alt="logo" /></a>
        </div>
        <ul className='text-primary flex gap-28'>
            <li><a href="#">LIVESTYLE</a></li>
            <li><a href="#">PHOTODIARY</a></li>
            <li><a href="#">MUSIC</a></li>
            <li><a href="#">TRAVEL</a></li>
        </ul>
    </div>
  )
}

export default Navbar