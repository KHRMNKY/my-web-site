import './App.css';
import BlogComponent from "./components/BlogComp.jsx";
import HeaderFunc from "./components/headComp.jsx";
import NavbarComp from "./components/NavbarComp.jsx";
import AboutPage from './pages/about.jsx';
import Blogpage from './pages/Blogpage.jsx';
import Videopage from './pages/Videopage.jsx';  
import { Routes, Route, BrowserRouter } from 'react-router-dom';





function App() {

  return (
    <BrowserRouter>
      <HeaderFunc />
      <NavbarComp />

      <Routes>
        <Route path="/" element={<AboutPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/video" element={<Videopage/>} />
        <Route path="/blogs" element={<Blogpage/>} />

      </Routes>
    </BrowserRouter>

  )
}

export default App

