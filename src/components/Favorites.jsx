import React, { useState } from "react";
import { useSelector } from "react-redux"
import Card from "./Card"
import { useDispatch} from "react-redux";
import { filteredCharacters, sortedCharacters } from "../redux/actions";
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
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      myFavorites:filteredCharacters(state, state.filter)
    }
  }


export default connect(mapStateToProps)(Favorites);