import { useState } from "react";
import validate from '../../validation';
import styles from './Form.module.css'
import imagen from '../../assets/rickAndMorty.png'

function Form({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (evento) => {
       const property = evento.target.name;
       const value = evento.target.value;

       setUserData({...userData, [property]:value})
       validate({...userData, [property]: value}, errors, setErrors)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
      };
      
    
    

    return(
        <div className={styles.div}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <img src={imagen} alt="rickymorty" className={styles.img} />
                </div>
                <div className={styles.subdiv}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <br />
                <input type="text" name="email" value={userData.email} placeholder="ejemplo@gmail.com" onChange={handleChange} className={styles.input} />
                {errors.email && <p className={styles.errors}>{errors.email}</p>}
                <br />
                <label htmlFor="password" className={styles.label}>Password</label>
                <br />
                <input type="password" name="password" value={userData.password} onChange={handleChange} className={styles.input} />
                {errors.password && <p className={styles.errors}>{errors.password}</p>}
                <br />
                </div>
                <button className={styles.button}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form;