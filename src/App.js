import './App.scss';
import Header from './components/header/Header';
import Navbottom from './components/Navbottom/Navbottom';
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
function App() {
  return (
    <Router>
      <Header/>
    <div className="App">
      <Container>
        <Routes>
          <Route path='/' element={<Trending/>} exact/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/series' element={<Series/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Container>
      <Navbottom/>
    </div>
    </Router>
  );
}

export default App;
