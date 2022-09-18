import { useState, useEffect, createContext } from 'react';

import itemsHeroes from '../items.json';

export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
  const [itemsState, setItemsState] = useState([]);
  useEffect(() => {
    const itemsArray = [];
    Object.entries(itemsHeroes)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([key, value]) => {
        const { dname } = value;
        if (dname !== undefined) {
          if (!dname.includes('Recipe')) {
            return itemsArray.push(value);
          }
        }
      });
    setItemsState(itemsArray);
  }, []);

  return <ItemsContext.Provider value={[itemsState]}>{props.children}</ItemsContext.Provider>;
};
