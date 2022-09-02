import './skill_icon.style.scss';

export const SkillIcon = ({ imgUrl, ability, className }) => {
  const { img, dname, desc } = ability;
  return <img className={className} src={`${imgUrl}${img}`} alt={dname} title={desc} />;
};
