import './card.style.scss';
import CARRY from '../../assets/svg/noun-sword-1432646.svg';
import NUKE from '../../assets/svg/noun-nuclear-5103661.svg';
import SUPPORT from '../../assets/svg/noun-hand-plus-4815869.svg';
import ESCAPE from '../../assets/svg/noun-escape-3814717.svg';
import INITIATOR from '../../assets/svg/noun-lightning-1241238.svg';
import DISABLER from '../../assets/svg/noun-disable-3883326.svg';
import DURABLE from '../../assets/svg/noun-shield-5101162.svg';
import JUNGLER from '../../assets/svg/noun-plant-257552.svg';
import PUSHER from '../../assets/svg/noun-skill-sword-attack-2360258.svg';
import { SkillIcon } from '../skill_icon/skill_icon.component';

export const Card = (props) => {
  const { heroes, imgUrl } = props;
  const { imgHD, localized_name, roles, abilities } = heroes;

  const iconsRole = (role) => {
    switch (role) {
      case 'Carry':
        return CARRY;
      case 'Escape':
        return ESCAPE;
      case 'Nuker':
        return NUKE;
      case 'Initiator':
        return INITIATOR;
      case 'Durable':
        return DURABLE;
      case 'Disabler':
        return DISABLER;
      case 'Jungler':
        return JUNGLER;
      case 'Support':
        return SUPPORT;
      case 'Pusher':
        return PUSHER;

      default:
        return role;
    }
  };

  const divStyle = {
    backgroundImage: `url(${imgHD})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='card' style={divStyle}>
      <div className='card-content'>
        <p className='flex'>
          {roles.map((role, index) => {
            return <img key={index} className='icon' src={iconsRole(role)} alt={role} title={role}></img>;
          })}
        </p>
        <h2 className='card-title'>{localized_name}</h2>
        <div className='skill-row'>
          {abilities.map((ability, index) => {
            return <SkillIcon key={index} ability={ability} imgUrl={imgUrl} className='card-skill' />;
          })}
        </div>
      </div>
    </div>
  );
};
