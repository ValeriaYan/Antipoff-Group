export default interface AuthFormProps {
    title: string,
    handleClick: (email: string, pass: string) => void,
    error: string
}
