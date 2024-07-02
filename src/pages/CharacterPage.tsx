import { useNavigate } from "react-router-dom";
import { charactersApi } from "../services/charactersService";
import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/redux-hooks";

const CharacterPage = () => {
    const characterId = useAppSelector((state) => state.character.id);
    const navigate = useNavigate();

    const { isAuth } = useAuth();
    useEffect(() => {
        if(!isAuth) {
            navigate('/auth')
        }
    })

    const { data: character, error, isLoading } = charactersApi.useFetchOneCharacterQuery(characterId);
    return (
        <div className='main__character character'>
            {isLoading && <div className="loading">Loading...</div>}
            {error && <div className="home-error">There is nothing here</div>}
            {character && !error && (
                <>
                    <div className='character__img'>
                        <img src={character.image} alt="" />
                    </div>
                    <ul className='character__info-list info-list'>
                        <li className='info-list__item'>Status: <span>{character.status}</span></li>
                        <li className='info-list__item'>Species: <span>{character.species}</span></li>
                        <li className='info-list__item'>Gender: <span>{character.gender}</span></li>
                        <li className='info-list__item'>Origin: <span>{character.origin.name}</span></li>
                        <li className='info-list__item'>Location: <span>{character.location.name}</span></li>
                    </ul>
                </>
            )}
        </div>
    )
}

export default CharacterPage