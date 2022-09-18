import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { SearchBox } from '../../component/search_box/search_box.component';
import { ItemsContext } from '../../context/items.context';

import './items.style.scss';

export const Items = ({ items, url, className }) => {
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
    <>
      <h1>Items</h1>
      <div className='flex-container'>
        <div className='filter-box-container'>
          <SearchBox labelName='search' type='search' name='search' onChange={handleChange} value={search}>
            Search
          </SearchBox>
        </div>
        <div className={`${className} items_container`}>
          {filteredList.map((m, index) => {
            return (
              <div className='item-card' key={index}>
                <h2>{m.dname}</h2>
                <div className='content'>
                  <img src={`${url}${m.img}`} alt={m.dname} />
                  <div className='inside-content'>
                    <p>{m.hint}</p>
                    <p className='strong'>Cost: {m.cost}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
