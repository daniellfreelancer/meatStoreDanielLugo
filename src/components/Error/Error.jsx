import React from 'react'
import error from '../../Assets/error404.png';
import './Error.css'

const Error = () => {
  return (
    <div className='container-fluid' >
        <img src={error} alt=""  className='imgError'/>
        <p className='text-center card-text bg-light'>Page not found</p>
    </div>
  )
}

export default Error