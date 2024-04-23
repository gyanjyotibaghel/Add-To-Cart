import React from 'react'
import { Link } from 'react-router-dom';
// import { PiShoppingCartFill } from "react-icons/pi";
import {useSelector} from 'react-redux';

const Navbar = () => {
  const items=useSelector((state)=>state.cart);
  return (
    <div className='navbar'>
      <span className='logo'>Online Shopping Store</span>
      <div className='main'>
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/cart'>Cart{items.length}
        {/* <PiShoppingCartFill className="icons"/> */}
        </Link>
        {/* <select>
          <option>All</option>
          <option>Men's Clothing</option>
          <option>Women's Clothing</option>
          <option>Electronic</option>
          <option>Jewellery</option>
        </select> */}
        
        {/* <p className='cartcount'>Cart:{items.length}</p> */}
      </div>
    </div>
  )
}

export default Navbar
