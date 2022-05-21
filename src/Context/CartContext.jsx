import React, { createContext, useEffect, useState } from 'react'
export const GlobalContext = createContext('')

    const GlobalStateContenxt = ({children}) => {
    const [carrito, setCarrito] = useState([])

     useEffect(() => {
       const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? []
       setCarrito(carritoLS)

     
     }, [])
     

      useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
      }, [carrito])
      

    const agregarCarrito = (producto) => {
      if(carrito.some(curso => curso.id === producto.id)){
        alert('Product already')
      } else {
        setCarrito([...carrito, producto])
      }    
    }

    const [total, setTotal] = useState(0)

    useEffect(() => {
      const calculoTotal = carrito.reduce(
        (total, producto) => total + producto.stock * producto.price,
        0
      )
      setTotal(calculoTotal)
     
    }, [carrito])
    

    const eliminarProducto = (id) => {
        const prodEliminar = carrito.filter( curso => curso.id !== id)
        setCarrito(prodEliminar)
    }

    const vaciarCart = () =>{
    setCarrito([])
    }
    

  return (
    //en el value digo la informacion que voy a proveer
    <GlobalContext.Provider value={{carrito, total, agregarCarrito, eliminarProducto, vaciarCart}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContenxt