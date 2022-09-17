import { useState } from 'react';
import { createContext } from 'react';

export const BuildContext = createContext();

export const BuildProvider = (props) => {
  const [builds, setBuilds] = useState([
    {
      id: 1,
      name: 'Markus build',
      hero: 'Abaddon',
      items: {
        early: [
          { id: 1, value: 'Tango' },
          { id: 2, value: 'Stout Shield' },
        ],
        mid: [
          { id: 1, value: 'Tranquil Boots' },
          { id: 2, value: 'Ultimate Orb' },
        ],
        late: [{ id: 1, value: 'Tango' }],
        optional: [
          { id: 1, value: 'Vanguard' },
          { id: 2, value: 'Veil of Discord' },
        ],
      },
    },
    {
      id: 2,
      name: 'Frank build',
      hero: 'Terrorblade',
      items: {
        early: [
          { id: 1, value: 'Tango' },
          { id: 2, value: 'Stout Shield' },
        ],
        mid: [
          { id: 1, value: 'Tranquil Boots' },
          { id: 2, value: 'Ultimate Orb' },
        ],
        late: [{ id: 1, value: 'Tango' }],
        optional: [
          { id: 1, value: 'Vanguard' },
          { id: 2, value: 'Veil of Discord' },
        ],
      },
    },
  ]);
  return <BuildContext.Provider value={[builds, setBuilds]}>{props.children}</BuildContext.Provider>;
};
