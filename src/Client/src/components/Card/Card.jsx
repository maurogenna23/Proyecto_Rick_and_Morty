import style from './Card.module.css'
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../redux/actions";
import { useState,useEffect } from "react";
import {connect} from 'react-redux'  // esto es para el map dispatch
import { useLocation } from 'react-router-dom';

function Card({id,name,status,species,gender,origin,image,onClose , addFav,removeFav,myFavorites} ) {
   const [isFav,setIsFav]= useState(false);
   const { pathname } = useLocation();

   
   const handleFavorite =() => {
      if(isFav){        
         setIsFav(false);
         removeFav(id);         
      }
      else{
         setIsFav(true)
         addFav({id, name, species, gender, image, onClose})   
      }
   }
   
useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [id,myFavorites]);





   return (
      <div className={style.container}>
            {
            isFav
             ? (
            <button className={style.like} onClick={handleFavorite}>❤️</button>
            ) : (
            <button  className={style.like} onClick={handleFavorite}>🤍</button>
            )
            }
            
         { pathname !== "/favorite" && (<button className={style.buttonX} onClick={()=>onClose(id)}>X</button>)}
         
         <img className={style.miImagen} src={image} alt='' /> 

         <Link className={style.link} to={`/detail/${id}`}><h2 className={style.name}>Nombre: {name}</h2></Link>
         <h2 className={style.text} >Estado: {status}</h2>
         <h2 className={style.text} >Especie: {species}</h2>
         <h2 className={style.text} >Genero: {gender}</h2>  
      </div>
   );

   
}
const mapStateToProps = (state) =>{
   return{
     myFavorites: state.myFavorites
   }
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}
export default connect (
   mapStateToProps,
   mapDispatchToProps
)(Card);