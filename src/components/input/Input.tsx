import { FC } from "react";

interface InputProps {
    label: string,
    type: string,
    value: string,
    onChange: (e :string) => void, 
}

const Input: FC<InputProps> = ({label, type, value, onChange}) => {
    return (
        <label>
            {label}
            <input
                name={label}
                type={type}
                value={value}
                onChange={e => onChange(e.target.value)} />
        </label>
    );
}

export default Input;