import './icon.style.scss';

export const Icon = ({ imgUrl, ability, className }) => {
  const { img, dname, desc } = ability;
  return <img className={className} src={`${imgUrl}${img}`} alt={dname} title={desc} />;
};
