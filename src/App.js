import { useEffect, useState } from 'react';
import './App.scss';
import dataHeroes from './heroes.json';
import abilitiesHeroes from './abilities.json';
import { Navigation } from './component/navigation/navigation.components';
import { Heroes } from './routes/heroes/heroes.component';
import { Abilities } from './routes/abilities/abilities.component';
import { Home } from './routes/home/home.component';
import { DotaClash } from './routes/dota_clash/dota_clash.component';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [currentTab, setCurrentTab] = useState('Home');
  const url = 'https://cdn.cloudflare.steamstatic.com/';

  useEffect(() => {
    setHeroes(dataHeroes);
    setAbilities(abilitiesHeroes);
  }, []);

  return (
    <div className='App'>
      <Navigation setCurrentTab={setCurrentTab} />
      {currentTab === 'Home' && <Home />}
      {currentTab === 'Heroes' && <Heroes className='grid' heroes={heroes} url={url} />}
      {currentTab === 'Abilities' && <Abilities className='grid' abilities={abilities} url={url} />}
      {currentTab === 'Dota Clash' && <DotaClash />}
    </div>
  );
}

export default App;
