import { Card } from 'types/card.model';
import './SingleCard.css';

interface SingleCardProps {
  card: Card,
  handleChoice: (card: Card) => void
}

const SingleCard = ({ card, handleChoice }: SingleCardProps) => {

  const handleClick = (card: Card) => {
    handleChoice(card);
  }

  return (
    <div className="card">
      <div>
        <img src={card.src} className="front" alt="front of the card" height={198} width={200} />
        <img
          src="/img/cover.png"
          className="back"
          alt="back of the card"
          onClick={() => handleClick(card)} />
      </div>
    </div>
  );
}

export default SingleCard;