import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
function NavBar() {
  return (
    <div id='navid'>
    
      <nav>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWJJ2tZOv55JaUtBxS0KN4l92ieQBDFL42wu7mq5QoKx8kHsd-MhhTQVypXn361ItDrg&usqp=CAU'></img>
      <ul>
      <li><NavLink to="Home" className='title'>Home</NavLink></li>
        <li><NavLink to="About" className='title'>About</NavLink></li>
        <li><NavLink to="Contact">Contact</NavLink></li>
        <li><NavLink to='SignIn'>SignIn</NavLink></li>
        <li><NavLink to='Error'>Error</NavLink></li>
      </ul>
      </nav>
   
    </div>
  )
}

export default NavBar
