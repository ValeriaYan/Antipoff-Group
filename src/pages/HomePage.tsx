import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { useEffect } from 'react';
import { charactersApi } from '../services/charactersService';
import CardsList from '../components/cards/CardsList';
 
const HomePage = () => {
    const navigate = useNavigate();
    const { data: characters, error, isLoading } = charactersApi.useFetchAllCharactersQuery('');

    const { isAuth } = useAuth();
    useEffect(() => {
        if(!isAuth) {
            navigate('/auth')
        }
    })


    if(isAuth) {
        return (
            <>
                {isLoading && <div className="loading">Loading...</div>}
                {error && <div className="home-error">There is nothing here</div>}
                {characters && !error && (
                    <div className="main__card-list card-list">
                        <CardsList characters={characters.results} />
                    </div>
                )}

            </>
        )
    }

}

export default HomePage;