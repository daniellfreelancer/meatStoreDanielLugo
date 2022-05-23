import React from 'react'
import { GlobalStateContenxt } from '../../Context/CartContext'


const Formulario = ({total,carrito}) => {
const { vaciarCart } = GlobalStateContenxt();
const {fetchGenerateTicket } = useFirebase();

    
  //FIREBASE II
  // {buyer: { name, phone, email}, items: [{id, title, price}], total}


  const [formulario, setFormulario] = useState({
    buyer: {
      email: "",
      name: "",
      phone:""
    },
    total:total,
    carrito: carrito
  })

  const {
    buyer: {email, name, phone}
  } = formulario;




  return (
    <div>Formulario</div>
  )
}

export default Formulario