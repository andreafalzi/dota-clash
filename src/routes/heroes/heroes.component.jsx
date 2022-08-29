import './heroes.style.scss';
import { Card } from '../../component/card/card.component';
import { FilterBox } from '../../component/filter_box/filter_box.component';

export const Heroes = ({ heroes, url, className }) => {
  heroes.sort((a, b) => (a.localized_name > b.localized_name ? 1 : -1));
  return (
    <>
      <h1>Heroes</h1>
      <div className='flex-container'>
        <FilterBox />
        <div className={className}>
          {heroes.map((hero, index) => {
            return <Card key={index} heroes={hero} imgUrl={url} />;
          })}
        </div>
      </div>
    </>
  );
};
