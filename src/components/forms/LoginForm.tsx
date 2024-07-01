import {FC, FormEvent, FormEventHandler, useState } from 'react';
import Input from '../input/Input';
import AuthFormProps from './interface';
import { useValidation } from '../../hooks/use-validation';


const LoginForm: FC<AuthFormProps> = ({title, handleClick, error}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [dirtyFields, setDirtyFields] = useState({email: false, pass: false})
    const emailValid = useValidation(email, {'isEmpty': false});
    const passValid = useValidation(pass, {'isEmpty': false});

    const handleSubmit: FormEventHandler = (event: FormEvent<Element>) => {
        event.preventDefault();
        handleClick(email, pass);
    }

    return (
        <form className='auth__form form' onSubmit={handleSubmit}>
            <Input 
                className='form__input input'
                label='Email' 
                type="email" 
                value={email} 
                changeHandler={email => setEmail(email)}
                blurHandler={() => setDirtyFields({...dirtyFields, email: true})}/>

            <div className='form__error error'>{(dirtyFields.email && emailValid.isEmpty) && 'Field cannot be empty'}</div>

            <Input 
                className='form__input input'
                label='Password' 
                type="password" 
                value={pass} 
                changeHandler={pass => setPass(pass)}
                blurHandler={() => setDirtyFields({...dirtyFields, pass: true})}/>

            <div className='form__error error'>{(dirtyFields.pass && passValid.isEmpty) && 'Field cannot be empty'}</div>

            <button className='form__btn btn'>{title}</button>
            <div className='form__error error'>{error}</div>
        </form>
    )
}

export { LoginForm }