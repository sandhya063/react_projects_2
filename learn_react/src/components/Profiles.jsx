import Profile from "./Profile";
import { useState } from "react";

function Profiles() {
    const [selectedProfileName, setSelectedProfileName] = useState('Skillup Labs');
    function selectProfile(name) {

        console.log(name);
        setSelectedProfileName(name);
    }

    return (
        <section className="shadow p-8 bg-white flex-col gap-2">
            <div className="flex">
            <Profile url="https://i.imgur.com/YfeOqp2s.jpg" color="red" selectProfile={selectProfile} name="Bandish" />
            <Profile url="https://i.imgur.com/OKS67lhs.jpg" color="green" selectProfile={selectProfile}  name="Sameer" />
            <Profile url="https://i.imgur.com/1bX5QH6s.jpg" color="blue" selectProfile={selectProfile}  name="Sangita" />
            <Profile url="https://i.imgur.com/7vQD0fPs.jpg" color="black" selectProfile={selectProfile}  name="Sandhya" />
            </div>
            <h3 className="text-xl ">{selectedProfileName}</h3>

        </section>
    )
}
export default Profiles;
