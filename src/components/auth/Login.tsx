import { LoginForm } from '../forms/LoginForm'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import { ERRORS } from './serverErrors';


const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('')


    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }));
                navigate('/')
            })
            .catch((error: FirebaseError) => {
                setError(ERRORS[error.code]);
            })
    }


    return  (
        <LoginForm
            title='Log In'
            handleClick={handleLogin}
            error={error}
        />
    )
}

export { Login };