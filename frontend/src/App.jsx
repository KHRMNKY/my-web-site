import './App.css';
import BlogComponent from "./components/BlogCard.jsx";
import HeaderFunc from "./components/headComp.jsx";
import NavbarComp from "./components/NavbarComp.jsx";
import Aboutfunc from './pages/about.jsx';
import Videopage from './pages/Videopage.jsx';  


const blog = {
  title: "İlk Blog Yazım",
  content: "Buraya kendinle ilgili ya da projen hakkında bir yazı yazabilirsin."
};


function App() {

  return (
    <>

    <HeaderFunc/>
    <NavbarComp/>
    /*
    <Videopage/>
    */
    
    </>

  )
}

export default App

