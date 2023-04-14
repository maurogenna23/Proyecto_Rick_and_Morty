import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./detail.module.css"

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '75353ae1d085.e7c3ee3c2a8f1bb7951f';

function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.div}>
      <div className={styles.p}>
        <p>{character.status ? `STATUS | ${character.status}` : null}</p>
        <p>{character.species ? `SPECIES | ${character.species}` : null}</p>
        <p>{character.gender ? `GENDER | ${character.gender}` : null}</p>
        <p>
          {character.origin ? `ORIGIN | ${character.origin.name}` : null}
        </p>
      </div>
      <img src={character.image} alt={character.name} className={styles.detailImg} />
    </div>
  );
}

export default Detail;

