import ICard from "../../models/ICard"

type CardProps = {
    key?: string,
    card: ICard
}

const Card = (props: CardProps) => {
    return (
        <>
          <div className="card">
            <div className="card__img">
              <img src={props.card.image} alt="" />
            </div>
            <div className="card__name">{props.card.name}</div>
            <div className="card__species">{props.card.species}</div>
          </div>
        </>
      );
}

export default Card;