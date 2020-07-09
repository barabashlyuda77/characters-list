const ITEMS_PER_PAGE = 10;

export const getEndpointsList = (count, url) => {
  const pagesAmount = Math.ceil(count / ITEMS_PER_PAGE);

  const list = [];
  for (let i = 1; i <= pagesAmount; i++) {
    list.push(`${url}/?page=${i}`);
  }
  return list;
};

export const injectMoviesIntoCharacters = (characters, movieTitlesByUrl) => {
  return characters.map((character) => ({
    ...character,
    films: character.films.map((filmUrl) => movieTitlesByUrl[filmUrl]),
  }));
};

export const injectSpeciesIntoCharacters = (characters, speciesByUrl) => {
  return characters.map((character) => ({
    ...character,
    species: character.species.map((url) => speciesByUrl[url]),
  }));
};

export const injectStarshipsIntoCharacters = (characters, starshipsByUrl) => {
  return characters.map((character) => ({
    ...character,
    starships: character.starships.map((url) => starshipsByUrl[url]),
  }));
};

export const transformBirthYears = (characters) => {
  return characters.map((character) => {
    const before = character.birth_year.toLowerCase().includes("bby");
    const absBirthYear = parseInt(character.birth_year);
    const birthYear = before ? -absBirthYear : absBirthYear;
    return {
      ...character,
      birth_year: birthYear,
    };
  });
};

export const getNamesFromUrls = (urlList) =>
  urlList.reduce((acc, item) => {
    acc[item.url] = item.name;
    return acc;
  }, {});

export const getTitlesFromUrls = (urlList) =>
  urlList.reduce((acc, item) => {
    acc[item.url] = item.title;
    return acc;
  }, {});
