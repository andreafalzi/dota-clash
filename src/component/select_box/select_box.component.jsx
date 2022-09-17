import './select_box.style.scss';

export const SelectBox = ({ options, ...otherProps }) => {
  return (
    <select {...otherProps}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};
