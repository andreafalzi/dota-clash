import './abilities.style.scss';

export const Abilities = ({ abilities, url, className }) => {
  return (
    <>
      <h1>Abilities</h1>
      <div className={className}>
        {abilities.map(({ dname, desc, img }, index) => {
          return (
            <div key={index}>
              <h2>{dname}</h2>
              <img src={`${url}${img}`} alt={dname} />
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
