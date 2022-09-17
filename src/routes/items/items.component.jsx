import { useState, useEffect } from 'react';
import { SearchBox } from '../../component/search_box/search_box.component';
import './items.style.scss';

export const Items = ({ items, url, className }) => {
  const [itemsState, setItemsState] = useState([]);
  const [filteredList, setFilteredList] = useState(itemsState);
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const itemsArray = [];
    Object.entries(items)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([key, value]) => {
        const { dname } = value;
        if (dname !== undefined) {
          if (!dname.includes('Recipe')) {
            return itemsArray.push(value);
          }
        }
      });
    setItemsState(itemsArray);
  }, [items]);

  useEffect(() => {
    const filtered = itemsState.filter((item) => item.dname.toLowerCase().includes(search.toLowerCase()));

    setFilteredList(filtered);
  }, [search, itemsState]);

  return (
    <>
      <h1>Items</h1>
      <SearchBox labelName='search' type='search' name='search' onChange={handleChange} value={search}>
        Search
      </SearchBox>
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
    </>
  );
};
