import React from 'react'

export const Login = () => {
  return (
    <form>
        <h1>Inicia Sesion</h1>
        <input type="email" placeholder='correo'/>
        <input type="password" placeholder='Contrasena' />
        <button type='submit'>Ingresar</button>
        <span>Aun no tienes cuenta? <a href="#">Registrate</a> </span>
        <button type='submit'>Ingresa con Google</button>
    </form>
  )
}
