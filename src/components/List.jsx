function List(props) {
    const elements = [];
    for (let index = 0; index < props.size; index++) {
        elements.push(<li>{props.text[index]}</li>);
    }
    return (
        <ul>
            {elements}
        </ul>
    );
}

export default List