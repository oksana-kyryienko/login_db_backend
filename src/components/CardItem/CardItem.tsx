import { Card } from '../../types/Card';
import './CardItem.css';

type Props = {
  card: Card;
};

export const CardItem: React.FC<Props> = ({ card }) => {
  const cardStyle = {
    backgroundImage: `url(${card.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="card" style={cardStyle}>
      <div className="card-content">
        <div className="card-info">
          <h3 className="card-title">{card.title}</h3>
          <p className="card-ptice">{card.price}</p>
          <p className="card-tiket">{card.tiket}</p>
        </div>
        <div className="card-info">
          <p className="card-yield">{card.yield}</p>
          <p className="card-days">{card.days}</p>
        </div>
        <div className="card-info">
          <p className="card-sold">{card.sold}</p>
          <p className="none">invisable text</p>
        </div>
      </div>
    </div>
  );
};
