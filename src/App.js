import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
// Pages
import Navbar from './component/_Navbar'
import Home from './pages/home/HomePage';
import News from './pages/news/_News';
import Popular from './pages/popular/_Popular'
import Trending from './pages/trending/_Trending'
import Categories from './pages/categories/_Categories'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/FrontendMentor' exact Component={Home}/>
          <Route path='/news' Component={News}/>
          <Route path='/popular' Component={Popular}/>
          <Route path='/trending' Component={Trending}/>
          <Route path='/categories' Component={Categories}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
