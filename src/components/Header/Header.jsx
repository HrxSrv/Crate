import "./Header.scss";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineHeart, AiOutlineSearch} from 'react-icons/ai' 
import {AiOutlineLogin} from 'react-icons/ai' 
import {AiOutlineShoppingCart} from 'react-icons/ai' 
function Header() {
  return (
    <div className='Nav'>
      <img src={require('../../assets/CRATE-logos_transparent.png')}/>
    <div className='search'>
        <input type='text' placeholder='Search Your Product' autoComplete='off'></input>
        <AiOutlineSearch size={"25px"} className='searchIcon'/>
    </div>
   <div className='nav2'>
   <div className='login'>
    <AiOutlineLogin className='loginIcon' size={"25px"}/>
    <p>Login</p>
    </div>
   <div className='cart'>
    <AiOutlineShoppingCart size={"25px"}/>
   <span>1</span>
    <p>Cart</p>
   </div>
   <div className='wish'>
   <AiOutlineHeart className='heartIcon' size={"25px"}/>
    <p>Wishlist</p>
   </div>
   </div>

</div>

  )
}

export default Header
