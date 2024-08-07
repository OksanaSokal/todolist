
type Button = {
    title: string
    onClick?: ()=>void
    className?: string
}
export const Button = ({title, onClick, className}: Button) => {
    return (
        <button className={className} onClick={onClick}>{title}</button>
    )
}