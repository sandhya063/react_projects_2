export default function Profile() {
    const url = "https://i.imgur.com/MK3eW3As.jpg";
    const name = "Skillup Labs";

    return (
        <img className="rounded-full border-2 border-blue-500" src={url} alt={name} />
    );
}