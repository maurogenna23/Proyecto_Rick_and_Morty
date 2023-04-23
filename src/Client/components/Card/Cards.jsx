import Card from './Card';
import styles from './Card.module.css'

function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className={styles.div}>
      {characters.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            gender={char.gender}
            species={char.species}
            image={char.image}
            onClose={() => onClose(char.id)}
          />
        );
      })}
    </div>
  );
}

export default Cards;
