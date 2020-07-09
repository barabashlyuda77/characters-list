## Project Description
An application used to display a filterable list of characters from the movie franchise Star Wars, built with JavaScript, React, Redux, Redux-Saga, React Router and SCSS.<br />
TweetWorld
Data is taken from an open API called [SWAPI](https://swapi.dev/).

### App Overview
The app consist of a main view that displaces the list of characters and a filter section, where the user can filter the characters by certain criteria. Clicking on one of the characters from the list opens a detailed view of this character. When the user changes the filter settings in the filter section, the list of characters instantly adapt to only show characters that match the chosen filter settings.

### Filter
The filter section allows the user to filter the list of characters according to the filter settings:<br />
- **Movie**: the movie the character appeared in (i.e. show only characters that appeared in Episode IV: A New Hope)
- **Species**: the character's species (i.e. show only characters that are human)
- **Birth from** & **Birth to**: a range of years that the character's birth year falls in (i.e. show only
characters born between -30 (30 BBY) and 5 (5 ABY) )<br />

All filter settings are using an AND relationship, i.e. if the user chooses to filter by movie and species, only characters that appear in the given movie AND are of the specified species should be displayed.

### Favorites
User can save Character into Favourites by using drag and drop.

## Installation and Setup
Clone down [this](https://github.com/barabashlyuda77/characters-list.git) repository. You will need `node` and `npm` installed globally on your machine.

#### Installation
`npm install` or `yarn`

#### To Start Server
`npm start` or `yarn start`

#### To Visit App
`localhost:3000`
