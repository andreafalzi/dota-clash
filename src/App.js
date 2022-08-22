import { useEffect, useState } from 'react';
import './App.css';
import dataHeroes from './heroes.json';
import abilitiesHeroes from './abilities.json';
import { Card } from './component/card/card.component';

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
      <h1>Heroes</h1>
      {/* <Card heroes={heroes[1]} imgUrl={url} /> */}
      <div className='grid'>
        {heroes.map((hero) => {
          return <Card key={hero.id} heroes={hero} imgUrl={url} />;
        })}
      </div>
      <h1>Abilities</h1>
      <div className='grid'>
        {abilities.map(({ dname, desc, img }, index) => {
          return (
            <div key={index}>
              <h2>{dname}</h2>
              <img src={`${url}${img}`} alt={dname} />
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
