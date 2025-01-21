import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({ handleAddRecipes }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('cards.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5">
      {cards.map((card) => (
        <Card
          key={card.recipe_id}
          card={card}
          handleAddRecipes={handleAddRecipes}
        />
      ))}
    </div>
  );
};

export default Cards;
