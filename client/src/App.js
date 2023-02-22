import { StrictMode } from 'react';
import HomePage from './pages/Home';
import ErrorBoundary from "./pages/ErrorBoundary.js";
import About from "./pages/About"
import Blog from "./pages/Blog"
import Project from "./pages/Project"
import Skills from './pages/Skills';
import BottomBar from './bar/BottomBar';
import NavBar from './bar/NavBar';
import Resume from "./pages/Resume";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import './styling/App.css';
import portfolioImage from "./styling/portfolioImage.png";

function App() {
  return (
    <div className="App">
      <StrictMode>
       <ErrorBoundary> 
      <BrowserRouter>
        <NavBar/>
      <Routes>  
        <Route exact path="/" element={<HomePage image={portfolioImage}/>} />
        <Route exact path="/about" element={<About image={portfolioImage}/>} />
        <Route exact path="/blogs" element={<Blog />} />
        <Route exact path="/myProjects" element={<Project />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/myResume" element={<Resume /> } />
      </Routes>

      <BottomBar />
      </BrowserRouter>
     </ErrorBoundary>
      </StrictMode>
    </div>
  );
}

export default App;
