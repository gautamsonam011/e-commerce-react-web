import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <p>Content Section</p>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
