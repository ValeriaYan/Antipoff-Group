import {FC, useState } from 'react';
import Input from '../input/Input';
import AuthFormProps from './interface';

const initialRegisterData = {
    name: '',
    email: '',
    pass: '',
    repeatPass: '',
}

const RegisterForm: FC<AuthFormProps> = ({title, handleClick}) => {
    const [registerData, setRegisterData] = useState(initialRegisterData);

    return (
        <div>
            <Input 
                label='Name' 
                type="text" 
                value={registerData.name} 
                onChange={name => setRegisterData({...registerData, name})}/>
            <Input 
                label='Email' 
                type="email" 
                value={registerData.email} 
                onChange={email => setRegisterData({...registerData, email})}/>
            <Input 
                label='Password' 
                type="password" 
                value={registerData.pass} 
                onChange={pass => setRegisterData({...registerData, pass})}/>
            <Input 
                label='Repeat password' 
                type="password" 
                value={registerData.repeatPass} 
                onChange={repeatPass => setRegisterData({...registerData, repeatPass})}/>
            <button
                onClick={() => handleClick(registerData.email, registerData.pass)}
            >
                {title}
            </button>
        </div>
    )
}

export { RegisterForm }