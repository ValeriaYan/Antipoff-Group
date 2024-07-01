import { useCharacterId } from "../hooks/use-character";
import { charactersApi } from "../services/charactersService";

const CharacterPage = () => {
    const characterId = useCharacterId();

    const { data: character, error, isLoading } = charactersApi.useFetchOneCharacterQuery(characterId);
    console.log(character)
    return (
        <div className='main__character character'>
            {isLoading && <div className="loading">Loading...</div>}
            {error && <div className="home-error">There is nothing here</div>}
            {character && !error && (
                <>
                    <img src={character.image} alt="" />
                    <div className='character__info'>
                        <div className='character__status'>Status: {character.status}</div>
                        <div className='character__species'>Species: {character.species}</div>
                        <div className='character__gender'>Gender: {character.gender}</div>
                        <div className='character__gender'>Origin: {character.origin.name}</div>
                        <div className='character__gender'>Location: {character.location.name}</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CharacterPage