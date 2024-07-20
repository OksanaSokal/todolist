
type Button = {
    title: string
    callback?: ()=>{}
}
export const Button = ({title, callback}: Button) => {
    return (
        <button onClick={callback}>{title}</button>
    )
}