import { FC } from "react";

interface InputProps {
    className: string,
    label: string,
    type: string,
    value: string,
    changeHandler: (e: string) => void, 
    blurHandler: () => void
}

const Input: FC<InputProps> = ({className, label, type, value, changeHandler, blurHandler}) => {
    return (
        <label className={className}>
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