import { useState, useEffect, useContext } from 'react';
import { SearchBox } from '../../component/search_box/search_box.component';
import { AbilitiesContext } from '../../context/abilities.context';
import './abilities.style.scss';

export const Abilities = ({ url }) => {
  const [abilitiesState] = useContext(AbilitiesContext);
  const [filteredList, setFilteredList] = useState(abilitiesState);
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const filtered = abilitiesState.filter((item) => item.dname.toLowerCase().includes(search.toLowerCase()));

    setFilteredList(filtered);
  }, [search, abilitiesState]);

  return (
    <div className='container'>
      <h1>Abilities</h1>
      <div className='flex-container'>
        <div className='filter-box-container'>
          <SearchBox labelName='search' type='search' name='search' onChange={handleChange} value={search}>
            Search
          </SearchBox>
        </div>
        <div className='abilities_grid'>
          {filteredList.length > 0 ? (
            filteredList.map(({ dname, desc, img, mc, cd }, index) => {
              return (
                <div key={index} className='ability-card'>
                  <div className='title'>
                    <img src={`${url}${img}`} alt={dname} />
                    <h2>{dname}</h2>
                  </div>
                  <div className='inside-content'>
                    <p>{desc}</p>
                    {!mc.includes('0') && (
                      <p className='strong'>
                        Mana:
                        {mc.map((e, index) => (
                          <span key={index}>{e}</span>
                        ))}
                      </p>
                    )}
                    {!cd.includes('0') && (
                      <p className='strong'>
                        Cooldown:
                        {cd.map((e, index) => (
                          <span key={index}>{e}s</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <h3 style={{ color: 'white' }}>No result found</h3>
          )}
        </div>
      </div>
    </div>
  );
};
