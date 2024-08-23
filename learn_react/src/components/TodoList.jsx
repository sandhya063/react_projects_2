const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink',
      padding: '20px',
      borderRadius: '10px'
    },
    profile: "https://i.imgur.com/7vQD0fPs.jpg"
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1 className="text-2xl font-bold mb-3">{person.name}'s Todos</h1>
        <img
          className="rounded-full"
          src={person.profile}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  