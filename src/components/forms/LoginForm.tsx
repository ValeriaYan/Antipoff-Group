import {FC, useState } from 'react';
import Input from '../input/Input';
import AuthFormProps from './interface';


const LoginForm: FC<AuthFormProps> = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
            <Input 
                label='Email' 
                type="email" 
                value={email} 
                onChange={email => setEmail(email)}/>
            <Input 
                label='Password' 
                type="password" 
                value={pass} 
                onChange={pass => setPass(pass)}/>
            <button
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
    )
}

export { LoginForm }