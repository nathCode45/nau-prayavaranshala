import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from 'react-bootstrap/Button';
import Navbar from './components/Navbar';
import React from 'react';
import Contact from './components/Contact';
import ImpactCreated from './components/ImpactCreated';
import ProjectDetails from './components/ProjectDetails';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import KnowledgeLibrary from './components/KnowledgeLibrary';
import Locations from './components/Locations';
import CaseDetails from './components/CaseDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column align-items-center" style={{padding: "0", margin: "0"}}>
        <Navbar />
        <div className="container-fluid"style={{padding: "0", margin: "0"}} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/impact-created" element={<ImpactCreated />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/knowledge-library" element={<KnowledgeLibrary />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/case_study/:id" element={<CaseDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
