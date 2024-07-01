import { Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../store/slices/userSlice';

const Layout = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    return (
        <div className='wrapper'>
            <div className='hero'>
                <div className='hero__container container'>
                    <header className='header'>
                        {location.pathname === '/character' && <div className='header__back-btn btn'>Back</div>}
                        <button
                            className='header__logout-btn btn'
                            onClick={() => dispatch(removeUser())}>
                            Log out
                        </button>
                    </header>
                    <div className='hero__body'>
                        Welcome!
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