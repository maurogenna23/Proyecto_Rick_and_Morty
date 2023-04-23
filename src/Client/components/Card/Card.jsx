import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

function Card({ id, name, gender, onClose, species, image, addFav, removeFav, myFavorites }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    const isFavorite = myFavorites.find(fav => fav.id === id);
    if (isFavorite) {
      removeFav(id);
    } else {
      addFav({
        id,
        name,
        gender,
        onClose,
        species,
        image,
      })
    }
  };

  useEffect(() => {
    const isFavorite = myFavorites.some(fav => fav.id === id);

    setIsFav(isFavorite ? true : false);
  }, [myFavorites, id]);

  return (
    <div className={styles.container}>
      <button className={styles.likeButton} onClick={handleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </button>
      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <img src={image} alt={name} />
      <h2 className={styles.species}>Species: {species}</h2>
      <h2 className={styles.gender}>Gender: {gender}</h2>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
