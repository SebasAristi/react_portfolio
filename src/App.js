import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter> 
    <Navigation/>
      <Routes>
        <Route path="/react_portfolio/" element={<Home/>} />
        <Route path="/react_portfolio/about" element={<About/>} />
        <Route path="/react_portfolio/projects" element={<Projects/>} />
        <Route path="/react_portfolio/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
