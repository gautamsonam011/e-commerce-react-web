import './App.css';
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
