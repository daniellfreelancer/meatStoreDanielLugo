import './App.css';
import './components/Navbar/NavbarS.css';
import Routs from './components/Routing/Routs';
import GlobalStateContenxt from './Context/CartContext';


function App() {

  return (
    <div className="bodyElement">
      <GlobalStateContenxt>      
        <Routs/>
      </GlobalStateContenxt>
    </div>
  );
}

export default App;
