import { Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../store/slices/userSlice';
import { useCharacterId } from '../../hooks/use-character';
import { charactersApi } from '../../services/charactersService';

const Layout = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const characterId = useCharacterId();

    const { data: character, error, isLoading } = charactersApi.useFetchOneCharacterQuery(characterId);
 
    return (
        <div className='wrapper'>
            <div className='hero'>
                <div className='hero__container container'>
                    <header className='header'>
                        {location.pathname.indexOf('/character/') === 0 && <div className='header__back-btn btn'>Back</div>}
                        <button
                            className='header__logout-btn btn'
                            onClick={() => dispatch(removeUser())}>
                            Log out
                        </button>
                    </header>
                    <div className='hero__body'>
                        {isLoading && <div className="loading">Loading...</div>}
                        {error && <div className="home-error">There is nothing here</div>}
                        {character && !error && location.pathname.indexOf('/character/') === 0 &&(
                            <div className='hero__title'>{character.name}</div>
                        )}
                    </div>
                </div>
            </div>
            <main className='main main_home'>
                <div className='main__container container'>
                    <Outlet />
                </div>
            </main>

        </div>
    )
}

export { Layout }