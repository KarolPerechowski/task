import './App.scss';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import Body from './components/Body/Body.js';
import Table from './components/Table/Table.js';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Navbar></Navbar>
        <Body className='body'></Body>
        <Table></Table>
        <Footer className='sticky-footer'></Footer>
      </div>
    </div>
  );
}

export default App;
