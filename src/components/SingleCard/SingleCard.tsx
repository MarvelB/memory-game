import { Card } from 'types/card.model';
import './SingleCard.css';

interface SingleCardProps {
  card: Card,
  handleChoice: (card: Card) => void,
  reveal: boolean,
  disabled: boolean
}

const SingleCard = ({ card, handleChoice, reveal, disabled }: SingleCardProps) => {

  const handleClick = () => {
    if (disabled)
      return;

    handleChoice(card);
  }

  return (
    <div className="card">
      <div className={reveal ? "flipped": ""}>
        <img src={card.src} className="front" alt="front of the card" height={198} width={200} />
        <img
          src="/img/cover.png"
          className="back"
          alt="back of the card"
          onClick={handleClick} />
      </div>
    </div>
  );
}

export default SingleCard;
