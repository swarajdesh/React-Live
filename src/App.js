import logo from './logo.svg';
import './App.css';
import {UserDetails} from './UserDetails'
import EventHandling from './EventHandling'
import ConditionalRendering from './ConditionalRendering'
import UserList from './UserList'
import Stylesheet from './Styles/Stylesheet'
import Counter from './Counter'
import {useState} from "react"

function App() {
    // console.log(<h1>Hi</h1>)
    // let name = "Swaraj";
    // const displayName = (name)=>{
    //   alert("Hi" + name);
    // }
  const [render, setRender] = useState(initialState)
  
  return (
    <div className="App">

    <button onClick={() => setRender(!render)}>Toggle</button>
    {render && <Counter/>}



    {/* <Stylesheet/> */}

     {/* <UserList></UserList>  */}

     {/* <ConditionalRendering isLoggedIn={true} /> */}

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
