import ICard from "../../models/ICard";
import Card from "./Card";

type CardsListProps = {
    characters: ICard[];
}

const CardsList = (props: CardsListProps) => {
    return (
        <>
            {props.characters.map((card) => {
                return <Card key={String(card.id)} card={card}/>
            })}
        </>
    )
}

export default CardsList;