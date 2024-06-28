import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice'
import { useAppDispatch } from '../hooks/redux-hooks';
import { useEffect } from 'react';
 
const HomePage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { isAuth, email } = useAuth();
    console.log(isAuth)
    useEffect(() => {
        if(!isAuth) {
            navigate('/login')
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
            </div>
        )
    }

}

export default HomePage;