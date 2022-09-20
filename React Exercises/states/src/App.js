import { useState } from "react";

function App() {
  const [name, setName] = useState("Irem");
  const [age, setAge] = useState(22);
  const [friends, setFriends] = useState(["Manny", "Bernard"]);
  const [address, setAddress] = useState({title : "İstanbul", zip: 3465});

  return (
  <div className="App">
    <h1>Hello {name}!</h1>
    <h2>{age}</h2>

    <button onClick ={() => setName("Fran")}> 
      Change name
    </button>
    <button onClick ={() => setAge(18)}> 
      Change age
    </button>
    
    <hr />
    <br></br>

    <h2>Friends</h2>
    {friends.map((friend, index) => (
    <div key={index}>{friend}</div>))}

    <br />

    <button onClick ={() => setFriends([...friends, "The Cleaner Guy"])}> 
      add a new friend
    </button>

    <hr />
    <br></br>

    <h2>Address</h2>
    <div> {address.title} {address.zip} </div>

    <br />

    <button onClick ={() => setAddress({title:"Ankara", zip: 34564})}> 
      add a new address
    </button>

  </div>
  );
}

export default App;
