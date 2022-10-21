import { Route, Routes } from 'react-router-dom';

import './App.scss';

import { Heroes } from './routes/heroes/heroes.component';
import { Abilities } from './routes/abilities/abilities.component';
import { Home } from './routes/home/home.component';
import { Builds } from './routes/builds/builds.component';
import { NewBuild } from './routes/newBuild/newBuild.component';
import { Build } from './routes/build/build.component';
import { Items } from './routes/items/items.component';
import Layout from './routes/layout/layout.component';
import { BuildProvider } from './context/build.context';
import { ItemsProvider } from './context/items.context';
import { HeroesProvider } from './context/heroes.context';
import NoResult from './routes/noResult/noResult.component';
import { AbilitiesProvider } from './context/abilities.context';

function App() {
  const url = 'https://cdn.cloudflare.steamstatic.com/';

  return (
    <BuildProvider>
      <HeroesProvider>
        <ItemsProvider>
          <AbilitiesProvider>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='heroes' element={<Heroes url={url} />} />
                <Route path='abilities' element={<Abilities url={url} />} />
                <Route path='items' element={<Items url={url} />} />
                <Route path='builds' element={<Builds url={url} />} />
                <Route path='builds/:id' element={<Build />} />
                <Route path='builds/new' element={<NewBuild />} />
              </Route>
              <Route path='*' element={<NoResult />} />
            </Routes>
          </AbilitiesProvider>
        </ItemsProvider>
      </HeroesProvider>
    </BuildProvider>
  );
}

export default App;
