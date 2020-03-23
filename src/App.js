import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar";
// import Introduction from "./components/introduction";
import About from "./components/about";
// import Timeline from "./components/timeline";
import Education from "./components/education";
import WorkExperience from './components/workexperience';
import Projects from './components/projects';
import Certifications from './components/certifications';

function App() {
  return (
      <div id="colorlib-page">
          <div id="container-wrap">
              <Sidebar/>
              <div id="colorlib-main">
                  {/* <Introduction/> */}
                  <About/>
                  {/* <Timeline/> */}
                  <WorkExperience/>
                  <Education/>
                  <Projects/>
                  <Certifications/>
              </div>
          </div>
      </div>
  );
}

export default App;
