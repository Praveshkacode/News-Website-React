import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({setCategory}) => {
  const [search,setSearch]=useState('');
  const handleNavClick = (category)=>{
    setCategory(category);
  }
  return (
    <nav>
      <div className='main-nav container flex'>
        <img className="company-logo" src={logo} alt="company logo" />
        <div className="nav-links">
          <ul className="flex"> 
            <li className="hover-link nav-itms" onClick={()=>handleNavClick('IPL')}>IPL</li>
            <li className="hover-link nav-itms" onClick={()=>handleNavClick('Finance')} >Finance</li>
            <li className="hover-link nav-itms" onClick={()=>handleNavClick('Politics')}>Politics</li>
            <li className="hover-link nav-itms" onClick={()=>handleNavClick('Tech')}>Tech</li>
          </ul>
        </div>
        <div className="search-bar">
          <input  onChange={(e)=>(setSearch(e.target.value))} type="text" className="news-input" placeholder="e.g Science"/>
          <button onClick={()=>handleNavClick(search)} className="search-button">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
