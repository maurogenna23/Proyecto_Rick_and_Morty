import { ADD_FAV, REMOVE_FAV } from "./actions";
import { FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload]
      };

    case REMOVE_FAV:
      return{
        ...state,
        myFavorites:state.myFavorites.filter(
          (character)=> character.id !==payload
        ),
      };

      case FILTER:
  const filteredCharacters = state.allCharacters.filter(
    (character) => character.gender === payload || character.gender === "unknown"
  );
  return {
    ...state,
    myFavorites: filteredCharacters
  };


      

    case ORDER:
      const sortedCharacters = [...state.allCharacters].sort((a, b) =>
        payload === "A" ? a.id - b.id : b.id - a.id
      );
      return {
        ...state,
        allCharacters: sortedCharacters
      };
    default:
      return state;
  }
};

export default rootReducer;
