import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from "../Pages/Cards";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Cards/>
    <p>Content Section</p>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
