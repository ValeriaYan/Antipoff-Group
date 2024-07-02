import { Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { removeUser } from '../../store/slices/userSlice';
import { charactersApi } from '../../services/charactersService';
import { useNavigate } from 'react-router-dom';
import { Search } from '../search/Search';

const Layout = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const characterId = useAppSelector((state) => state.character.id);
    const navigate = useNavigate();

    const { data: character, error, isLoading } = charactersApi.useFetchOneCharacterQuery(characterId);

 
    return (
        <div className='wrapper'>
            <div className='hero'>
                <div className='hero__container container'>
                    <header className='header'>
                        {location.pathname.indexOf('/character/') === 0 && 
                        <div onClick={() => navigate(-1)} className='header__back-btn header__btn btn'>Back</div>}
                        <button
                            className='header__logout-btn header__btn btn'
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
                        {location.pathname === '/' && (
                            <Search />
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