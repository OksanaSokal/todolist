
type Button = {
    title: string
    callback?: ()=>void
}
export const Button = ({title, callback}: Button) => {
    return (
        <button onClick={callback}>{title}</button>
    )
}