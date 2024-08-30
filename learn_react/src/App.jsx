
import Gallery  from "./components/Gallery";
import TodoList from "./components/TodoList";
import Profiles from "./components/Profiles";
import LogIn from "./components/LogIn";
import PackagingList from "./components/PackagingList";
import List from "./components/List";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-7xl font-bold">Learn React</h1>
      <h2 className="text-2xl font-bold mt-4">1. Your First Component</h2>
      <Gallery />

      <h2 className="text-2xl font-bold mt-4">2. To Do List</h2>
      <TodoList />
      <h2 className="tect-2xl font-bold mt-4">Passing Props to the components</h2>
      <Profiles />
      <h2 className="tect-2xl font-bold mt-4">conditional Rendering</h2>
      <LogIn isLoggedIn={true} />
      <h2 className="tect-2xl font-bold mt-4">Packaging List</h2>

      <PackagingList />
      <h2 className="tect-2xl font-bold mt-4">Rendering List</h2>
      <List />
      

    </div>
  )
}

export default App
