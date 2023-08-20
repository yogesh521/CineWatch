import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from './components/Watchlist';
import Header from './components/Header';
import Add from './components/Add';
import Watched from './components/Watched';
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";



function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header />

      <Routes>
        <Route exact path='/' element={<Watchlist/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/watched' element={<Watched/>}/>

      </Routes>

    </Router>
    </GlobalProvider>
      
  );
};

export default App;
