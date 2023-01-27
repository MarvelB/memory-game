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

  console.log(cards, turns)
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img src={card.src} className="front" alt="card frond" height={198} width={200} />
              <img src="/img/cover.png" className="back" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
