import { FC } from "react";

interface InputProps {
    label: string,
    type: string,
    value: string,
    changeHandler: (e: string) => void, 
    blurHandler: () => void
}

const Input: FC<InputProps> = ({label, type, value, changeHandler, blurHandler}) => {
    return (
        <label>
            {label}
            <input
                name={label}
                type={type}
                value={value}
                onChange={e => changeHandler(e.target.value)} 
                onBlur={() => blurHandler()}/>
        </label>
    );
}

export default Input;