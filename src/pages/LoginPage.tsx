import { Link } from 'react-router-dom'
import { Login } from '../components/auth/Login';

const LoginPage = () => {
    return (
        <div className='main__auth auth auth_login'>
            <h1 className='auth__title'>Login</h1>
            <Login />
            <p>
                Don't have an account yet? <Link to="/auth/register">register</Link>
            </p>
        </div>
    )
}

export default LoginPage;