import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice'
import { useAppDispatch } from '../hooks/redux-hooks';
import { useEffect } from 'react';
import { charactersApi } from '../services/charactersService';
import CardsList from '../components/cards/CardsList';
 
const HomePage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { data: characters, error, isLoading } = charactersApi.useFetchAllCharactersQuery('');

    const { isAuth, email } = useAuth();
    useEffect(() => {
        if(!isAuth) {
            navigate('/auth')
        }
    })


    if(isAuth) {
        return (
            <div>
                <h1>Welcome</h1>

                <button
                    onClick={() => dispatch(removeUser())}>
                    Log out from {email}
                </button>

                {isLoading && <div className="loading">Loading...</div>}
                {error && <div className="home-error">There is nothing here</div>}
                {characters && !error && (
                    <div className="card-list">
                    <CardsList characters={characters.results} />
                    </div>
                )}

            </div>
        )
    }

}

export default HomePage;