import './button.style.scss';

export const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps} className='button'>
      {children}
    </button>
  );
};
