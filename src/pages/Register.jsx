import React from 'react'

export const Register = () => {
  return (
    <div className='register-form'>
        <form>
            <h1>Registrate</h1>
            <input type="text" placeholder='Nombre'/>
            <input type="text" placeholder='Correo'/>
            <input type="password" placeholder='Contrasena' />
            <button type='submit'>Ingresar</button>
            <span>Ya tienes cuenta? <a href="#">Ingresa</a> </span>
            <button type='submit'>Ingresa con Google</button>
        </form>
    </div>
  )
}
