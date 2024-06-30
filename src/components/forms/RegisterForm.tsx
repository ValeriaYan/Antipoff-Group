import {FC, FormEvent, FormEventHandler, useState } from 'react';
import Input from '../input/Input';
import AuthFormProps from './interface';
import { useValidation } from '../../hooks/use-validation';

const initialRegisterData = {
    name: '',
    email: '',
    pass: '',
    repeatPass: '',
}

const RegisterForm: FC<AuthFormProps> = ({title, handleClick, error}) => {
    const [registerData, setRegisterData] = useState(initialRegisterData);
    const [dirtyFields, setDirtyFields] = useState({name: false, email: false, pass: false, repeatPass: false})
    const emailValid = useValidation(registerData.email, {'isEmail': false});
    const passValid = useValidation(registerData.pass, {'minLength': 6});
    const nameValid = useValidation(registerData.name, {'isEmpty': false});

    const handleSubmit: FormEventHandler = (e: FormEvent<Element>) => {
        e.preventDefault();
        handleClick(registerData.email, registerData.pass);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input 
                label='Name' 
                type="text" 
                value={registerData.name} 
                changeHandler={name => setRegisterData({...registerData, name})}
                blurHandler={() => setDirtyFields({...dirtyFields, name: true})}/>
            {(dirtyFields.name && nameValid.isEmpty) && <div>Name cannot be empty</div>}
            <Input 
                label='Email' 
                type="email" 
                value={registerData.email} 
                changeHandler={email => setRegisterData({...registerData, email})}
                blurHandler={() => setDirtyFields({...dirtyFields, email: true})}/>
            {(dirtyFields.email && emailValid.emailError) && <div>Incorrect Email</div>}
            <Input 
                label='Password' 
                type="password" 
                value={registerData.pass} 
                changeHandler={pass => setRegisterData({...registerData, pass})}
                blurHandler={() => setDirtyFields({...dirtyFields, pass: true})}/>
            {(dirtyFields.pass && passValid.minLengthError) && <div>Password must contain {'>'} 6 characters</div>}
            <Input 
                label='Repeat password' 
                type="password" 
                value={registerData.repeatPass} 
                changeHandler={repeatPass => setRegisterData({...registerData, repeatPass})}
                blurHandler={() => setDirtyFields({...dirtyFields, repeatPass: true})}/>
            {(registerData.repeatPass !== registerData.pass) && <div>Passwords are not equal</div>}
            <div>{error}</div>
            <button>{title}</button>
        </form>
    )
}

export { RegisterForm }