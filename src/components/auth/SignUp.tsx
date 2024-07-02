import { RegisterForm } from '../forms/RegisterForm'
import { useNavigate } from 'react-router'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import { ERRORS } from './serverErrors';

const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/')
            })
            .catch((error: FirebaseError) => {
                setError(ERRORS[error.code]);
            })
    }

    return  (
        <RegisterForm
            title='Register'
            handleClick={handleRegister}
            error={error}
        />
    )
}

export { SignUp };