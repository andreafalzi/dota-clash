import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import dataHeroes from './heroes.json';
import abilitiesHeroes from './abilities.json';
import itemsHeroes from './items.json';

import { Heroes } from './routes/heroes/heroes.component';
import { Abilities } from './routes/abilities/abilities.component';
import { Home } from './routes/home/home.component';
import { Builds } from './routes/builds/builds.component';
import { NewBuild } from './routes/newBuild/newBuild.component';
import { Build } from './routes/build/build.component';
import { Items } from './routes/items/items.component';
import { Layout } from './routes/layout/layout.component';
import { BuildProvider } from './context/build.context';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [items, setItems] = useState([]);

  const url = 'https://cdn.cloudflare.steamstatic.com/';

  useEffect(() => {
    setHeroes(dataHeroes.sort((a, b) => (a.localized_name > b.localized_name ? 1 : -1)));
    setAbilities(abilitiesHeroes);
    setItems(itemsHeroes);
  }, []);

  return (
    <BuildProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='heroes' element={<Heroes className='grid' heroes={heroes} url={url} />} />
          <Route path='abilities' element={<Abilities className='grid' abilities={abilities} url={url} />} />
          <Route path='items' element={<Items className='grid' items={items} url={url} />} />
          <Route path='builds' element={<Builds className='grid' items={items} url={url} />} />
          <Route path='builds/:buildId' element={<Build />} />
          <Route path='builds/new' element={<NewBuild />} />
        </Route>
      </Routes>
    </BuildProvider>
  );
}

export default App;
