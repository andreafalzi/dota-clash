import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { SearchBox } from '../../component/search_box/search_box.component';
import { ItemsContext } from '../../context/items.context';

import './items.style.scss';

export const Items = ({ url }) => {
  const [itemsState] = useContext(ItemsContext);
  const [filteredList, setFilteredList] = useState(itemsState);
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const filtered = itemsState.filter((item) => item.dname.toLowerCase().includes(search.toLowerCase()));

    setFilteredList(filtered);
  }, [search, itemsState]);

  return (
    <div className='container'>
      <h1>Items</h1>
      <div className='flex-container'>
        <div className='filter-box-container'>
          <SearchBox labelName='search' type='search' name='search' onChange={handleChange} value={search}>
            Search
          </SearchBox>
        </div>
        <div className='items_grid'>
          {filteredList.length > 0 ? (
            filteredList.map((m, index) => {
              return (
                <div className='item-card' key={index}>
                  <div className='title'>
                    <img src={`${url}${m.img}`} alt={m.dname} />
                    <h2>{m.dname}</h2>
                  </div>
                  <div className='inside-content'>
                    <p>{m.hint}</p>
                    <p className='strong'>Cost: {m.cost}</p>
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
