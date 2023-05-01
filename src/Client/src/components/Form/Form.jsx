import { useState } from 'react';
import style from './Form.module.css'
import validate from './validate';
import image from '../../Assets/rickmorty.png'

const From =({login})=>{
const [userData,setUserdata]=useState({
    email:'',
    password:''
})
const [errors,setErrors]=useState({
    email:'',
    password:''
})
const HandleonChange = (event)=>{
    setUserdata({
        ...userData,
        [event.target.name]:event.target.value
    })
    setErrors(
        validate({
          ...userData,[event.target.name]: event.target.value
        })
      )
}


const handleOnSubmit = (event) => {
    event.preventDefault()
    login(userData)
}
    return(
       <div className={style.contenedor}>
        <form onSubmit={handleOnSubmit} className={style.form}>
        <div className={style.backgroundTitle}>
        <h1 className={style.title}>RICK AND MORTY</h1>
        </div>
            <label className={style.label}>Email</label>
            <br />
            <input  className={style.input}  name="email" type="email" placeholder='Ingresa Tu Email' onChange={HandleonChange}/>
            <br />
            {errors.email && <span className={style.errors}>{errors.email}</span>}
            <hr />
            <label className={style.label}>Password</label>
            <br />
            <input className={style.input}   name="password" type="text" placeholder='Ingresa tu contraseña'onChange={HandleonChange} />
            <br />
            {errors.password && <span className={style.errors}>{errors.password}</span>}
            <hr />
            <button className={style.boton} disabled={!userData.email|| ! userData.password|| errors.email||errors.password}>Ingresar</button>
        </form>
       </div>
    )
    }
export default From