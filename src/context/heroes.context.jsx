import { useState, useEffect, createContext } from 'react';

import dataHeroes from '../heroes.json';

export const HeroesContext = createContext();

export const HeroesProvider = (props) => {
  const [heroesState, setHeroesState] = useState([]);
  useEffect(() => {
    setHeroesState(dataHeroes.sort((a, b) => (a.localized_name > b.localized_name ? 1 : -1)));
  }, []);

  return <HeroesContext.Provider value={[heroesState]}>{props.children}</HeroesContext.Provider>;
};
