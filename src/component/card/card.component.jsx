import './card.style.scss';

export const Card = (props) => {
  const { heroes, imgUrl } = props;
  const { img, imgHD, localized_name, name, roles } = heroes;

  const icons = (role) => {
    switch (role) {
      case 'Carry':
        return 'https://www.svgrepo.com/show/337576/muscle.svg';
        break;
      case 'Escape':
        return 'https://www.svgrepo.com/show/105378/sword.svg';
        break;
      case 'Nuker':
        return 'https://www.svgrepo.com/show/197910/radiation-nuclear.svg';
        break;
      case 'Initiator':
        return 'https://www.svgrepo.com/show/105378/sword.svg';
        break;
      case 'Durable':
        return 'https://www.svgrepo.com/show/105378/sword.svg';
        break;
      case 'Disabler':
        return 'https://www.svgrepo.com/show/105378/sword.svg';
        break;
      case 'Jungler':
        return 'https://www.svgrepo.com/show/105378/sword.svg';
        break;
      case 'Support':
        return 'https://www.svgrepo.com/show/105378/sword.svg';
        break;
      case 'Pusher':
        return 'https://www.svgrepo.com/show/105378/sword.svg';
        break;

      default:
        break;
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
          {roles.map((role) => {
            return <img className='icon' src={icons(role)} alt={role}></img>;
          })}
        </p>
        <h2 className='card-title'>{localized_name}</h2>
        <p>Stats</p>
        <div className='skill-row'>
          <img className='card-skill' src={`${imgUrl}${img}`} alt={name} />
          <img className='card-skill' src={`${imgUrl}${img}`} alt={name} />
          <img className='card-skill' src={`${imgUrl}${img}`} alt={name} />
          <img className='card-skill' src={`${imgUrl}${img}`} alt={name} />
        </div>
      </div>
    </div>
  );
};
