import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import Body from './components/Body/Body.js';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
