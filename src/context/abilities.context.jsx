import { useState, useEffect, createContext } from 'react';

import abilitiesHeroes from '../abilities.json';

export const AbilitiesContext = createContext();

export const AbilitiesProvider = (props) => {
  const [abilitiesState, setAbilitiesState] = useState([]);
  useEffect(() => {
    const newAbilities = [];
    const checkAbilities = (abilities) => {
      abilities.forEach((ability) => {
        if (ability.desc === '' || ability.desc === '.' || !ability.desc) {
          ability = { ...ability, desc: 'Data not available' };
        }
        if (ability.mc === undefined) {
          ability = { ...ability, mc: ['0'] };
        }
        if (!Array.isArray(ability.mc)) {
          ability = { ...ability, mc: [ability.mc] };
        }
        if (ability.cd === undefined) {
          ability = { ...ability, cd: ['0'] };
        }
        if (!Array.isArray(ability.cd)) {
          ability = { ...ability, cd: [ability.cd] };
        }
        newAbilities.push(ability);
      });
    };

    checkAbilities(abilitiesHeroes);
    setAbilitiesState(newAbilities.sort((a, b) => (a.dname > b.dname ? 1 : -1)).filter((ability) => ability.dname !== ''));
  }, []);

  return <AbilitiesContext.Provider value={[abilitiesState]}>{props.children}</AbilitiesContext.Provider>;
};
