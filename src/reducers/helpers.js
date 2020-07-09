export const filterByFilms = (characters, filmName) => {
  if (filmName === null) {
    return characters;
  }
  return characters.filter((character) =>
    character.films.find((film) =>
      film.toLowerCase().includes(filmName.toLowerCase())
    )
  );
};

export const filterBySpecies = (characters, speciesName) => {
  if (speciesName === null) {
    return characters;
  }
  return characters.filter((item) =>
    item.species.find((species) =>
      species.toLowerCase().includes(speciesName.toLowerCase())
    )
  );
};

export const filterByBirthYearFrom = (characters, birthYearFrom) => {
  return birthYearFrom === null
    ? characters
    : characters.filter((item) => item.birth_year >= Number(birthYearFrom));
};

export const filterByBirthYearTo = (characters, birthYearTo) => {
  return birthYearTo === null
    ? characters
    : characters.filter((item) => item.birth_year <= Number(birthYearTo));
};
