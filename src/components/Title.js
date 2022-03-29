export default function Title(props) {
    const side = props.side;

    return <h1 className={`${side}Title`}>To-Do List</h1>;
}