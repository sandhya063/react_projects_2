function Item(props) {
    if(props.packed) {
        return (<li>{props.name} https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-large/2705@2x.png </li>)
    }
    return(
        <li>{props.name}</li>

    );
}
export default Item;