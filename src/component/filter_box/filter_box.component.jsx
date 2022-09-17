import { SearchBox } from '../search_box/search_box.component';
import './filter_box.style.scss';

export const FilterBox = (props) => {
  const { handle, value, selectOptions } = props;
  const { search, attribute, role } = value;
  const { selectAttributeOptions, selectRoleOptions } = selectOptions;

  return (
    <div className='filter-box-container'>
      {/* INPUT SEARCH */}
      <SearchBox labelName='search' type='search' name='search' onChange={handle} value={search}>
        Search
      </SearchBox>
      {/* ATTRIBUTE SELECTOR */}
      <label htmlFor='attribute'>Attribute</label>
      <select name='attribute' onChange={handle} value={attribute}>
        {selectAttributeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {/* ROLE SELECTOR */}
      <label htmlFor='role'>Role</label>
      <select name='role' onChange={handle} value={role}>
        {selectRoleOptions.map((role) => {
          return (
            <option key={role.value} value={role.value}>
              {role.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
