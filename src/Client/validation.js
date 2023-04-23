const validate = (userData, errors, setErrors) => {
    
    // Validar email
    if (!userData.email) {
      setErrors ({...errors, email:'El email es obligatorio'});
    } else if (userData.email.length > 35) {
      setErrors({...errors, email:'No puedes superar los 35 caracteres'});
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)
      ) {
      setErrors({...errors, email:"Email inválido"})
    }else{
      setErrors({...errors, email:''});
    }
  
    // Validar password
    if(userData.password.length<6 || userData.password.length > 10){
      setErrors({...errors, password: 'Longitud de password inválida'})
    } else if(!/\d/.test(userData.password)){
      setErrors({...errors, password:'Debe contener al menos un número'})
    }else{
      setErrors({...errors, password:''});
    }
  }
  
  export default validate;
  