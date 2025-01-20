import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch('cards.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    return (
        <div>
            
            {
                cards.map(card => <Card
                key={card.recipe_id} 
                card={card}    
                ></Card>)
            }
        </div>
    );
};

export default Cards;