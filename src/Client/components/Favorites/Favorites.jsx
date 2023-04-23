import React, { useState } from "react";
import { useSelector } from "react-redux"
import Card from "../Card/Card"
import styles from "./favorites.module.css"
import { useDispatch} from "react-redux";
import { filteredCharacters, sortedCharacters } from "../../redux/actions";
import { connect } from "react-redux";

const Favorites = () =>{
    const favorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(sortedCharacters(e.target.value));
        setAux(!aux);
      };
    const handleFilter = (e) => {
        dispatch(filteredCharacters(e.target.value));
      }; 

      

    return(
        <>
        <div className={styles.favoritesContainer}>
        <select onChange={handleOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <div className={styles.Card}>
        {favorites.map(({id, name, species, gender, image})=>{
            return ( 
              
                <Card
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                />
                );
            })}
           </div>
        </div>
        </>
    )
}
const mapStateToProps = (state) => {
  const { myFavorites, filter } = state;
  const filteredFavorites = myFavorites.filter((character) => character.gender === filter);
  return {
    myFavorites: filteredFavorites,
  };
};




export default connect(mapStateToProps)(Favorites);