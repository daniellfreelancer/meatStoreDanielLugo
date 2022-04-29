import { useEffect, useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar.jsx';
import './components/Navbar/NavbarS.css';


function App() {

  const [product, setProduct] = useState({});  
  const itemListProduct = [ 
    {
      name:"Not Meat",
       price: 150
    }, {
      name: "Roast Beef",
      price: 160
    }, {
      name: "Kosher Meat",
      price: 155
    }]

    useEffect(() => {
      const cartList = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(itemListProduct)
        }, 3000);
      })

      cartList.then((res) => {setProduct(res)}).then(() => console.log(product)).catch((err) => console.log(err));

      console.log(product)          

    }, [])
    


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
