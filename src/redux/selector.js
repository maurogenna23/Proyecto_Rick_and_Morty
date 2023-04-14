export const filteredCharacters = (state) => {
    const { allCharacters, filter } = state;
    if (filter === "all") {
      return allCharacters;
    } else {
      return allCharacters.filter((character) => character.gender === filter);
    }
  };
  