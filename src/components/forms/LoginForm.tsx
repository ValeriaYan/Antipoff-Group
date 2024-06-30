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
        <form onSubmit={handleSubmit}>
            <Input 
                label='Email' 
                type="email" 
                value={email} 
                changeHandler={email => setEmail(email)}
                blurHandler={() => setDirtyFields({...dirtyFields, email: true})}/>
            {(dirtyFields.email && emailValid.isEmpty) && <div>Field cannot be empty</div>}
            <Input 
                label='Password' 
                type="password" 
                value={pass} 
                changeHandler={pass => setPass(pass)}
                blurHandler={() => setDirtyFields({...dirtyFields, pass: true})}/>
            {(dirtyFields.pass && passValid.isEmpty) && <div>Field cannot be empty</div>}
            <button>{title}</button>
            <div>{error}</div>
        </form>
    )
}

export { LoginForm }