import { Link } from "react-router-dom";
import ICard from "../../models/ICard"
import { setCharacter } from "../../store/slices/characterSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";

type CardProps = {
    key?: string,
    card: ICard,
}

const Card = (props: CardProps) => {
    const dispatch = useAppDispatch();
    return (
        <Link to={'/character/' + props.card.id}>
          <div  onClick={() => dispatch(setCharacter({id: props.card.id}))}className="card">
            <div className="card__img">
              <img src={props.card.image} alt="" />
            </div>
            <div className="card__name">{props.card.name}</div>
          </div>
        </Link>
      );
}

export default Card;