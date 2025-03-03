import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from 'react-bootstrap/Button';
import Navbar from './components/Navbar';
import React from 'react';
import Contact from './components/Contact';
import ImpactCreated from './components/ImpactCreated';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import KnowledgeLibrary from './components/KnowledgeLibrary';
import Locations from './components/Locations';

function App() {

  return (    
    <Router>
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <Routes> {/* Use Routes to define the different routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/impact-created" element={<ImpactCreated />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/knowledge-library" element={<KnowledgeLibrary/>}/>
            <Route path="/locations" element={<Locations/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    
      
  )
}

export default App
