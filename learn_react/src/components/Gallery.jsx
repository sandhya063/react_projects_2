import Profile from "./Profile";
import { formatDate } from '../libs/utils';


function Gallery() {
    return(
        <section className="bg-white rounded-md shadow my-4 p-4">
            <h2 className="font-bold text-xl mb-4" style={{color: 'red', textDecoration: 'underline'}}>Amazing scientists</h2>
            <h3 className="font-bold text-lg mb-4">Today is {formatDate(new Date())}</h3>

            <div className="flex gap-3">
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
            </div>
        </section>
    );
}

export default Gallery;