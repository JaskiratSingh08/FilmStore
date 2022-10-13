import { Search } from 'akar-icons'
import React from 'react'
import { Link } from "react-router-dom";
import './Navbottom.scss'

const Navbottom = () => {
  return (
    <div className="navbottom">
      <footer className="navbottom-footer">
        <button className="navbottom-a">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Trending
          </Link>
        </button>
        <button className="navbottom-a">
          <Link to="/movies" style={{ textDecoration: "none", color: "inherit" }}>
            Movies
          </Link>
        </button>
        <button className="navbottom-a">
          <Link to="/series" style={{ textDecoration: "none", color: "inherit" }}>
            Tv Series
          </Link>
        </button>
        <button className="navbottom-a">
          <Search size={18} />
          {/* <span className="navbottom-text"> */}
          <Link to="/search" style={{ textDecoration: "none", color: "inherit" }}>
            Search
          </Link>
          {/* </span> */}
        </button>
      </footer>
    </div>
  )
}

export default Navbottom