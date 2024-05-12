import './Content.css';
import cardData from '../../data/CardData.json';
import { CardItem } from '../CardItem/CardItem';

export const Content = () => {
  return (
    <div className="content">
      <h1 className="content-title">Open Deals</h1>
      <div className="content-section">
        {cardData.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
