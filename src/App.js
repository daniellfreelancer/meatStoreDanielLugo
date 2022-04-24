import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Navbar from './components/Navbar/Navbar.jsx';
import './components/Navbar/NavbarS.css';


function App() {
  

  return (

    
    
    <div className="bodyElement">     
        <header>
          <Navbar />
        </header>
        
        <main>
          <ItemListContainer />
        </main>

    </div>
  );
}

export default App;
