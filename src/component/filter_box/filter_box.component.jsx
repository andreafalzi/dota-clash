import './filter_box.style.scss';

const roleArr = ['carry', 'escape', 'nuker', 'initiator', 'durable', 'disabler', 'jungler', 'support', 'pusher'];

export const FilterBox = () => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='filter-box-container'>
      <label htmlFor='attribute'>Attribute</label>
      <select name='attribute' id='' defaultValue={'empty'}>
        <option value='empty'></option>
        <option value='str'>Strength</option>
        <option value='agi'>Agility</option>
        <option value='int'>Intellect</option>
      </select>
      <label htmlFor='role'>Role</label>
      <select name='role' id='' defaultValue={'empty'}>
        <option value='empty'></option>
        {roleArr.map((role) => {
          return (
            <option key={role} value={role}>
              {capitalizeFirstLetter(role)}
            </option>
          );
        })}
      </select>
      <label htmlFor='search'>Search</label>
      <input type='search' name='search' id='' />
    </div>
  );
};
