import { useEffect, useState } from "react"

type ValidationFields = {
    'minLength'?: number,
    'isEmpty'?: boolean,
    'isEmail'?: boolean,
}

export function useValidation(value: string, validations: ValidationFields) {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const re = /[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9\\.\\-]+\.[A-Za-z]{2,}/;

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < <number>validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isEmail':
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;

            }
        }
    }, [value]);

    return {
        isEmpty,
        minLengthError,
        emailError,
    }
}