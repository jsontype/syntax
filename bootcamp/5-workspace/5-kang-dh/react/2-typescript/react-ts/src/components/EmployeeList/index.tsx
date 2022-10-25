type EmployeeListProps = {
    name: string
    position: string
    optional: string
    onClick: (name: string) => void
}

export default function EmployeeList({ name, position, optional, onClick }: EmployeeListProps) {
    const handleClick = () => onClick(name)

    return (
        <div>
            <div>이름: {name}</div>
            <div>포지션: {position}</div>
            <div>옵셔널 포지션: {optional}</div>
            <button onClick={handleClick}>채용</button>
        </div>
    )
}
