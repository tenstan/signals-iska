import { Header } from "./components/Header";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";
import { useUsers } from "./contexts/UserContext";
//import { addUser } from "./contexts/UserStore";

function App() {
  console.log("Render App");

  const { addUser } = useUsers();

  return (
    <div class="app">
      <Header />
      <button
        onClick={() =>
          addUser({ id: Date.now().toString(), name: "John Doe", age: 18 })
        }
      >
        Create default user
      </button>

      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
