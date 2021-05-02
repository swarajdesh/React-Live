import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails'

function App() {
    console.log(<h1>Hi</h1>)
    let name = "Swaraj";

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick></button>
      <UserDetails></UserDetails>
    </div>
  );
}

export default App;


