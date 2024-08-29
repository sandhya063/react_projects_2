import Item from "./Item";
function PackagingList() {
    return(
        <section>
            <h1>Sandhya's Packaging List</h1>
            <ul>
                <Item packed={false} name="Space suit" />
                <Item packed={true} name="Helmet with a golden leaf" />
                <Item packed={true} name="Team Photo" />
                <Item packed={true} name="Camping Tent" />

            </ul>
        </section>
    )
}
export default PackagingList;