import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import Donations from './pages/Donations/Donations';


function App() {
  return (
    <div className="App">
        <Router> 
            <Navbar />
            <Switch>
                <Route path="/About" component={About}/>
                <Route path="/Careers" component={Careers}/>
                <Route path="/Contact" component={Contact} />
                <Route path="/Donations" component={Donations} />
                <Route path="/" exact component={Home} />
            </Switch>
            <Footer/>
        </Router>
    </div>
      
    
  );
}

export default App;
