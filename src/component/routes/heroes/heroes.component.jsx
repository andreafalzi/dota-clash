import './heroes.style.scss';
import { Card } from '../../card/card.component';

export const Heroes = ({ heroes, url, className }) => {
  return (
    <>
      <h1>Heroes</h1>
      <div className={className}>
        {heroes.map((hero, index) => {
          return <Card key={index} heroes={hero} imgUrl={url} />;
        })}
      </div>
    </>
  );
};
