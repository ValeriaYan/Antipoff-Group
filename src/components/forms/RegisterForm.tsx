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
        <form className='auth__form form' onSubmit={handleSubmit}>
            <Input 
                className='form__input input'
                label='Name' 
                type="text" 
                value={registerData.name} 
                changeHandler={name => setRegisterData({...registerData, name})}
                blurHandler={() => setDirtyFields({...dirtyFields, name: true})}/>

            <div className='form__error error'>{(dirtyFields.name && nameValid.isEmpty) && 'Name cannot be empty'}</div>

            <Input 
                className='form__input input'
                label='Email' 
                type="email" 
                value={registerData.email} 
                changeHandler={email => setRegisterData({...registerData, email})}
                blurHandler={() => setDirtyFields({...dirtyFields, email: true})}/>

            <div className='form__error error'>{(dirtyFields.email && emailValid.emailError) && 'Incorrect Email'}</div>

            <Input 
                className='form__input input'
                label='Password' 
                type="password" 
                value={registerData.pass} 
                changeHandler={pass => setRegisterData({...registerData, pass})}
                blurHandler={() => setDirtyFields({...dirtyFields, pass: true})}/>

            <div className='form__error error'>{(dirtyFields.pass && passValid.minLengthError) && 'Password must contain > 6 characters'}</div>

            <Input 
                className='form__input input'
                label='Repeat password' 
                type="password" 
                value={registerData.repeatPass} 
                changeHandler={repeatPass => setRegisterData({...registerData, repeatPass})}
                blurHandler={() => setDirtyFields({...dirtyFields, repeatPass: true})}/>

            <div className='form__error error'> {(registerData.repeatPass !== registerData.pass) && 'Passwords are not equal'}</div>

            <button className='form__btn btn'>{title}</button>
            <div className='form__error error' >{error}</div>
        </form>
    )
}

export { RegisterForm }