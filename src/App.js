import { useEffect, useState } from 'react';
import './App.scss';
import dataHeroes from './heroes.json';
import abilitiesHeroes from './abilities.json';
import { Navigation } from './component/navigation/navigation.components';
import { Heroes } from './component/routes/heroes/heroes.component';
import { Abilities } from './component/routes/abilities/abilities.component';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const url = 'https://cdn.cloudflare.steamstatic.com/';

  useEffect(() => {
    setHeroes(dataHeroes);
    setAbilities(abilitiesHeroes);
  }, []);

  return (
    <div className='App'>
      <Navigation />
      <Heroes className='grid' heroes={heroes} url={url} />
      <Abilities className='grid' abilities={abilities} url={url} />
    </div>
  );
}

export default App;
