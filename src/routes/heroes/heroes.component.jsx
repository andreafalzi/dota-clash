import { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';

import './heroes.style.scss';
import { Card } from '../../component/card/card.component';
import { SearchBox } from '../../component/search_box/search_box.component';
import { SelectBox } from '../../component/select_box/select_box.component';
import { HeroesContext } from '../../context/heroes.context';

export const Heroes = ({ url }) => {
  const [heroesState] = useContext(HeroesContext);
  const selectRoleOptions = [
    { id: 1, value: '', text: 'All' },
    { id: 2, value: 'Carry', text: 'Carry' },
    { id: 3, value: 'Escape', text: 'Escape' },
    { id: 4, value: 'Nuker', text: 'Nuker' },
    { id: 5, value: 'Initiator', text: 'Initiator' },
    { id: 6, value: 'Durable', text: 'Durable' },
    { id: 7, value: 'Disabler', text: 'Disabler' },
    { id: 8, value: 'Jungler', text: 'Jungler' },
    { id: 9, value: 'Support', text: 'Support' },
    { id: 10, value: 'Pusher', text: 'Pusher' },
  ];

  const selectAttributeOptions = [
    { id: 1, value: '', text: 'All' },
    { id: 2, value: 'str', text: 'Strength' },
    { id: 3, value: 'agi', text: 'Agility' },
    { id: 4, value: 'int', text: 'Intellect' },
  ];

  const defaultSearchFields = {
    attribute: '',
    role: '',
    search: '',
  };

  const [filteredList, setFilteredList] = useState(heroesState);
  const [searchFields, setSearchFields] = useState(defaultSearchFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearchFields({ ...searchFields, [name]: value });
  };

  useEffect(() => {
    const filterBySearch = (filteredList) => {
      // Avoid filter for empty string
      if (!searchFields.search) {
        return filteredList;
      }
      const filteredHeroes = filteredList.filter((item) => item.localized_name.toLowerCase().includes(searchFields.search.toLowerCase()));
      return filteredHeroes;
    };

    const filterSelectedAttribute = (filteredList) => {
      // Avoid filter for empty string
      if (!searchFields.attribute) {
        return filteredList;
      }
      const filteredHeroes = filteredList.filter((item) => item.primary_attr.includes(searchFields.attribute));
      return filteredHeroes;
    };

    const filterSelectedRole = (filteredList) => {
      // Avoid filter for empty string
      if (!searchFields.role) {
        return filteredList;
      }
      const filteredHeroes = filteredList.filter((item) => item.roles.includes(searchFields.role));
      return filteredHeroes;
    };

    var filteredList = filterSelectedAttribute(heroesState);
    // filteredList = filterSelectedRole(filteredList);
    // filteredList = filterBySearch(filteredList);
    // setFilteredList(filteredList);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      filteredList = filterSelectedRole(filteredList);
      filteredList = filterBySearch(filteredList);
      setFilteredList(filteredList);
    }, 500);
  }, [searchFields.attribute, searchFields.role, searchFields.search, heroesState]);

  //framer motion state
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div className='container'>
      <h1>Heroes</h1>
      <div className='flex-container'>
        <div className='filter-box-container'>
          {/* INPUT SEARCH */}
          <SearchBox labelName='search' type='search' name='search' onChange={handleChange} value={searchFields.search}>
            Search
          </SearchBox>
          {/* ATTRIBUTE SELECTOR */}
          <SelectBox options={selectAttributeOptions} name='attribute' onChange={handleChange} value={searchFields.attribute}>
            Filter by Attribute
          </SelectBox>
          {/* ROLE SELECTOR */}
          <SelectBox options={selectRoleOptions} name='role' onChange={handleChange} value={searchFields.role}>
            Filter by Role
          </SelectBox>
        </div>
        <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className='heroes_grid'>
          {filteredList.length > 0 ? (
            filteredList.map((hero, index) => {
              return <Card key={index} heroes={hero} imgUrl={url} />;
            })
          ) : (
            <h3 style={{ color: 'white' }}>No result found</h3>
          )}
        </motion.div>
      </div>
    </div>
  );
};
