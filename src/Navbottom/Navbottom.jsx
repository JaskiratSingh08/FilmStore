import { Search } from 'akar-icons'
import React from 'react'
import './Navbottom.css'

const Navbottom = () => {
  return (
    <div className="navbottom">
        <footer className="navbottom-footer">
            <a className="navbottom-a" href="#">Trending</a>
            <a className="navbottom-a" href="#">Movies</a>
            <a className="navbottom-a" href="#">Tv Series</a>
            <a className="navbottom-a" href="#">
            <Search size={18} /> <span className="navbottom-text">Search</span>
                </a>
        </footer>
    </div>
  )
}

export default Navbottom