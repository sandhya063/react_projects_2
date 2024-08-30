
export default function Profile(props) {
    const url = "https://i.imgur.com/MK3eW3As.jpg";
   
    return (
        <img onClick={() => props.selectProfile(props.name)} className={`rounded-full border-4 border-${props.color || 'red'}-500`} src={props.url || url} alt={props.name || name} />
    );
}
