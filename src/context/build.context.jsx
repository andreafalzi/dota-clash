import { useState } from 'react';
import { createContext } from 'react';

export const BuildContext = createContext();

export const BuildProvider = (props) => {
  const [builds, setBuilds] = useState([
    {
      id: '11zx',
      name: 'Abadon Carry build',
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
      id: '22zx',
      name: 'Terrorblade Midler build',
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
    {
      id: '22fb',
      name: 'Enchantress Off-Lane',
      hero: 'Enchantress',
      items: {
        early: [
          { id: 1, value: 'Arcane rune' },
          { id: 2, value: 'Blades of Attack' },
        ],
        mid: [
          { id: 1, value: 'Arcane Boots' },
          { id: 2, value: 'Bloodthorn' },
        ],
        late: [{ id: 1, value: 'Blade Mail' }],
        optional: [
          { id: 1, value: 'Cheese' },
          { id: 2, value: 'Buckler' },
        ],
      },
    },
    {
      id: '46zx',
      name: 'Bloodseeker jungle',
      hero: 'Bloodseeker',
      items: {
        early: [
          { id: 1, value: 'Tango' },
          { id: 2, value: 'Broadsword' },
          { id: 3, value: 'Null Talisman' },
        ],
        mid: [
          { id: 1, value: 'Tranquil Boots' },
          { id: 2, value: 'Cerimonial Robe' },
          { id: 3, value: 'Clarity' },
        ],
        late: [
          { id: 1, value: 'Crystalys' },
          { id: 2, value: 'Daedalus' },
        ],
        optional: [{ id: 1, value: 'Diffusial Blade' }],
      },
    },
    {
      id: '95zx',
      name: 'Axe pusher',
      hero: 'Axe',
      items: {
        early: [
          { id: 1, value: 'Tango' },
          { id: 2, value: 'Stout Shield' },
          { id: 3, value: 'Blink Dagger' },
        ],
        mid: [
          { id: 1, value: 'Vanguard' },
          { id: 2, value: 'Vambrace' },
          { id: 3, value: 'Assault Cuirass' },
        ],
        late: [{ id: 1, value: 'Crimson Guard' }],
        optional: [{ id: 1, value: 'Overwhelming Blink' }],
      },
    },
    {
      id: '00z0',
      name: 'Zeus God-Build',
      hero: 'Zeus',
      items: {
        early: [
          { id: 1, value: 'Tango' },
          { id: 2, value: 'Blink Dagger' },
        ],
        mid: [
          { id: 1, value: "Aghanim's Scepter" },
          { id: 2, value: 'Arcane Ring' },
        ],
        late: [{ id: 1, value: 'Refresher Orb' }],
        optional: [
          { id: 1, value: 'Octarine Core' },
          { id: 2, value: 'Veil of Discord' },
        ],
      },
    },
  ]);
  return <BuildContext.Provider value={[builds, setBuilds]}>{props.children}</BuildContext.Provider>;
};
