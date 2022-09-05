import './abilities.style.scss';

export const Abilities = ({ abilities, url, className }) => {
  const newAbilities = [];
  const checkAbilities = (abilities) => {
    abilities.forEach((ability) => {
      if (ability.mc === undefined) {
        ability = { ...ability, mc: ['0'] };
      }
      if (!Array.isArray(ability.mc)) {
        ability = { ...ability, mc: [ability.mc] };
      }
      if (ability.cd === undefined) {
        ability = { ...ability, cd: ['0'] };
      }
      if (!Array.isArray(ability.cd)) {
        ability = { ...ability, cd: [ability.cd] };
      }
      newAbilities.push(ability);
    });
  };

  checkAbilities(abilities);

  return (
    <>
      <h1>Abilities</h1>
      <div className={className}>
        {newAbilities.map(({ dname, desc, img, mc, cd }, index) => {
          return (
            <div key={index} className='ability-card'>
              <h2>{dname}</h2>
              <div className='content'>
                <img src={`${url}${img}`} alt={dname} />
                <div className='inside-content'>
                  <p>{desc}</p>
                  {!mc.includes('0') && (
                    <p className='strong'>
                      Mana:
                      {mc.map((e) => (
                        <span> {e}</span>
                      ))}
                    </p>
                  )}

                  {!cd.includes('0') && (
                    <p className='strong'>
                      Cooldown:
                      {cd.map((e) => (
                        <span> {e}</span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
