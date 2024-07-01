import { Link } from "react-router-dom";
import { SignUp } from "../components/auth/SignUp";

const RegisterPage = () => {
    return (
        <div className='main__auth auth auth_register'>
            <h1 className='auth__title'>Register</h1>
            <SignUp />
            <p>
                Already have an account? <Link to="/auth">login</Link>
            </p>
        </div>
    )
}

export default RegisterPage;