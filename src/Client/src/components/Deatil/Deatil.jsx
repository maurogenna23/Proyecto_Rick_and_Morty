import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Deatil.module.css'


const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);


    return(
        <div className={style.container}>
            <h1 className={style.title}>DETAIL</h1>
        <div className={style.info}>
        <img className={style.imagen} src={character?.image} alt={character?.name} />
            <div className={style.details}>
                <div className={style.backgroundName}>
                    <h1 className={style.h1}>{character?.name}</h1>
                </div>
                    <h2 className={style.h2}>ESTADO: {character?.status}</h2>
                    <h2 className={style.h2}>ESPECIE: {character?.species}</h2>
                    <h2 className={style.h2}>GÉNERO: {character?.gender}</h2>
                    <h2 className={style.h2}>ORIGEN: {character?.origin?.name}</h2>
                </div>
        </div>
        </div>
    )
}

export default Detail;
// el de arriba es condiconal como un if else 
/* character && <div>
        <h1>{characters.name}</h1> condicional &&
        <span>{characters.status}</span>
        <span>{characters.specie}</span>
        <span>{characters.gender}</span>
        <span>{characters.origin.name}</span>
        <img src={characters.image} alt="" />
    </div> */

/*     <div>
        <h1>{characters?.name}</h1> //  condicional chaining 
        <span>{characters.status}</span>
        <span>{characters.specie}</span>
        <span>{characters.gender}</span>
        <span>{characters.origin.name}</span>
        <img src={characters.image} alt="" />
    </div> 
    
    
     characters ? <div>
         <h1>{characters.name}</h1>
         <span>{characters.status}</span>
         <span>{characters.specie}</span>
         <span>{characters.gender}</span>
         <span>{characters.origin.name}</span>
         <img src={characters.image} alt="" />
     </div> : null*/
