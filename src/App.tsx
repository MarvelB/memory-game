import SingleCard from 'components/SingleCard/SingleCard';
import { useState } from 'react';
import { Card } from 'types/card.model';
import { Image } from 'types/image.model';
import './App.css';

const cardImages: Image[] = [
  { "src": "/img/kaido.jpg" },
  { "src": "/img/luffy.jpg" },
  { "src": "/img/shanks.jpg" },
  { "src": "/img/teach.jpeg" },
  { "src": "/img/white-beard.jpg" },
  { "src": "/img/zoro.jpg" },
]

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState<number>(0);

  const shuffleCards = (): void => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() })) as Card[];

    setCards(shuffledCards);
    setTurns(0);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
