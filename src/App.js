import logo from './logo.svg';
import './App.css';
import {UserDetails} from './UserDetails'
import EventHandling from './EventHandling'
import ConditionalRendering from './ConditionalRendering'

function App() {
    // console.log(<h1>Hi</h1>)
    // let name = "Swaraj";
    // const displayName = (name)=>{
    //   alert("Hi" + name);
    // }

  return (
    <div className="App">

      <ConditionalRendering isLoggedIn={true} />

      {/* <h1>Hello {name}</h1> */}
      {/* <button onClick></button>
      <UserDetails name="John" age={21} displayName = {displayName}>
        <div>
          <h1>This information is specific to John</h1>
        </div>
      </UserDetails> */}

      {/* <EventHandling/> */}

      {/* <UserDetails name="John" age={21}/> */}
    </div>
  );                      
}


export default App;


