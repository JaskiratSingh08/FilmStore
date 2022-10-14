import './App.scss';
import Header from './components/header/Header';
import Navbottom from './components/Navbottom/Navbottom';
import {FaArrowCircleUp} from 'react-icons/fa';
import Container from '@mui/material/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies.js';
import Series from './pages/Series/Series.jsx';
import Search from './pages/Search/Search.jsx';
import { useState } from 'react';
function App() {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Router>
      <Header />
      <div className="App">
        <Container>

          <button className="btnscroll">
            <FaArrowCircleUp onClick={scrollToTop}
              style={{ display: visible ? 'inline' : 'none' }} />
          </button>

          <Routes>
            <Route path='/' element={<Trending />} exact />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Container>
        <Navbottom />
      </div>
    </Router>
  );
}

export default App;
