import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';

import NavSharesensation from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import Donations from './pages/Donations/Donations';
import Howitwork from './pages/Howitwork/Howitwork';
import Newjob from './pages/Newjob/Newjob';


function App() {
  return (
    <div className="App">
        <Router> 
            <NavSharesensation />
            <Switch>
                <Route path="/About" component={About}/>
                <Route path="/Careers" component={Careers}/>
                <Route path="/Contact" component={Contact} />
                <Route path="/Donations" component={Donations} />
                <Route path="/Howitwork" component={Howitwork} />
                <Route path="/Newjob" component={Newjob} />
                <Route path="/" exact component={Home} />
            </Switch>
            <Footer/>
        </Router>
    </div>
      
    
  );
}

export default App;
