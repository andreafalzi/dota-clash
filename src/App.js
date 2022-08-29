import { useEffect, useState } from 'react';
import './App.scss';
import dataHeroes from './heroes.json';
import abilitiesHeroes from './abilities.json';
import BACKGROUND from './assets/wallpaperflare.com_wallpaper.jpg';
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

  const divStyle = {
    backgroundImage: `url(${BACKGROUND})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div className='App' style={divStyle}>
      <div className='container'>
        <Navigation setCurrentTab={setCurrentTab} />
        {currentTab === 'Home' && <Home />}
        {currentTab === 'Heroes' && <Heroes className='grid' heroes={heroes} url={url} />}
        {currentTab === 'Abilities' && <Abilities className='grid' abilities={abilities} url={url} />}
        {currentTab === 'Dota Clash' && <DotaClash />}
      </div>
    </div>
  );
}

export default App;
