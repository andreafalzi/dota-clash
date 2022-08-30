import './filter_box.style.scss';

export const FilterBox = (props) => {
  const { handle, search, roleArr, selectAttributeOptions } = props;
  const { handleSearch, handleSearchRole, handleSearchAttribute } = handle;
  const { searchInput, searchRole, searchAttribute } = search;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='filter-box-container'>
      {/* ATTRIBUTE SELECTOR */}
      <label htmlFor='attribute'>Attribute</label>
      <select name='attribute' value={searchAttribute} onChange={handleSearchAttribute}>
        {selectAttributeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {/* ROLE SELECTOR */}
      <label htmlFor='role'>Role</label>
      <select name='role' id='' defaultValue={searchRole} onChange={handleSearchRole}>
        <option value={searchRole}></option>
        {roleArr.map((role) => {
          return (
            <option key={role} value={role}>
              {capitalizeFirstLetter(role)}
            </option>
          );
        })}
      </select>
      {/* INPUT SEARCH */}
      <label htmlFor='search'>Search</label>
      <input type='search' name='search' id='' value={searchInput} onChange={handleSearch} />
    </div>
  );
};
