import './abilities.style.scss';

export const Abilities = ({ abilities, url, className }) => {
  console.log(abilities.length);
  return (
    <>
      <h1>Abilities</h1>
      <div className={className}>
        {abilities.map(({ dname, desc, img, mc, cd }, index) => {
          return (
            <div key={index} className='ability-card'>
              <h2>{dname}</h2>
              <img src={`${url}${img}`} alt={dname} />
              <p>{desc}</p>
              {mc !== undefined && <p>Mana Cost: {mc}</p>}
              {cd !== undefined && cd !== '0' && <p>Cooldown:{cd}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
};
