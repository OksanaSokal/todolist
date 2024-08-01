
type Button = {
    title: string
    onClick?: ()=>void
}
export const Button = ({title, onClick}: Button) => {
    return (
        <button onClick={onClick}>{title}</button>
    )
}