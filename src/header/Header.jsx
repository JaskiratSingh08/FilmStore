import React from 'react';
import {AirplayVideo} from 'akar-icons';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <AirplayVideo strokeWidth={2} size={30} color="white" />
        <span className="header-heading">MoviesApi</span>
        <AirplayVideo strokeWidth={2} size={30} color="white"/>
    </header>  )
}

export default Header