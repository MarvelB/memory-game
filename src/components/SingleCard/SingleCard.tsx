import { Card } from 'types/card.model';
import './SingleCard.css';

interface SingleCardProps {
  card: Card
}

const SingleCard = ({ card }: SingleCardProps) => {
  return (
    <div className="card">
      <div>
        <img src={card.src} className="front" alt="card frond" height={198} width={200} />
        <img src="/img/cover.png" className="back" alt="card back" />
      </div>
    </div>
  );
}

export default SingleCard;
