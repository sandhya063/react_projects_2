function List() {
    const authors=[
        
            'Creola Katherine Johnson: mathematician',
            'Mario José Molina-Pasquel Henríquez: chemist',
            'Mohammad Abdus Salam: physicist',
            'Percy Lavon Julian: chemist',
            'Subrahmanyan Chandrasekhar: astrophysicist'
          ];
    return( 
        <div>
            <h3>List of Author</h3>
            <ul>
                {
                    authors.map((author, index) => (
                        <li key={index}>{author}</li>
                    ))
                }
            </ul>
        </div>
    )

}
export default List