import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Navbar } from "./Navbar";
import { About } from "./About";
import { Project } from "./Project";
import { Skills } from "./Skills";
import { Resume } from "./Resume";
import { Contact } from "./Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/MyPortfolioApp">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} /> {/* Default Route */}
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="skills" element={<Skills />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
