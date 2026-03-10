import './App.css';
import BlogComponent from "./components/BlogCard.jsx";
import HeaderFunc from "./components/headComp.jsx";
import NavbarComp from "./components/NavbarComp.jsx";
import Aboutfunc from './pages/about.jsx';
import Videopage from './pages/Videopage.jsx';  
import { Routes, Route, BrowserRouter } from 'react-router-dom';


const blog = {
  title: "İlk Blog Yazım",
  content: "Buraya kendinle ilgili ya da projen hakkında bir yazı yazabilirsin."
};


function App() {

  return (
    <BrowserRouter>
      <HeaderFunc />
      <NavbarComp />

      <Routes>
        <Route path="/" element={<Aboutfunc/>} />
        <Route path="/about" element={<Aboutfunc/>} />
        <Route path="/video" element={<Videopage/>} />
        <Route path="/blog" element={<BlogComponent blog={blog} />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App

