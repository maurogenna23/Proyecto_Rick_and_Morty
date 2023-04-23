import { ADD_FAV, REMOVE_FAV } from "./actions";
import { FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };


      case REMOVE_FAV:
        return { ...state, myFavorites: payload };

      case FILTER:
        // Crear una copia del estado global allCharacters
        const allCharactersCopy = [...state.allCharacters];
        // Filtrar los personajes que tengan el mismo género que el recibido por payload
        const filteredCharacters = allCharactersCopy.filter(
          (character) => character.gender === payload
        );
        // Retornar una copia del estado global actualizado, con la propiedad myFavorites igual al filtrado
        return {
          ...state,
          myFavorites: filteredCharacters
        };
      


      

        case ORDER:
          // Crear una copia del estado global allCharacters
          const sortedCharacters = [...state.allCharacters];
          // Ordenar los personajes de acuerdo a su id
          sortedCharacters.sort((a, b) => a.id - b.id);
          // Si el payload es "A", ordenar los personajes de menor a mayor; si es "D", ordenarlos de mayor a menor
          if (payload === "A") {
            sortedCharacters.sort((a, b) => a.id - b.id);
          } else if (payload === "D") {
            sortedCharacters.sort((a, b) => b.id - a.id);
          }
          // Retornar una copia del estado global actualizado, con la propiedad myFavorites igual al ordenamiento realizado
          return {
            ...state,
            myFavorites: sortedCharacters
          };
        
    default:
      return state;
  }
};

export default rootReducer;
