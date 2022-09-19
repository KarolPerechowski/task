import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import Body from './components/Body/Body.js';
import Sidebar from './components/Sidebar/Sidebar.js';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Body></Body>
        <Sidebar></Sidebar>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
