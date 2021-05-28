import React from 'react'

function UserList() {
  //  let users = ['Monika','Nisha','Rahul']

  let users = [
      {
          name : 'John',
          age : 23,
          language : "C",
          key : 1
      },
      {
        name : 'Simran',
        age : 22,
        language : "Go",
        key : 2
    },
    {
        name : 'Swaraj',
        age : 25,
        language : "Python",
        key : 3
    },
    {
        name : 'Jesse',
        age : 20,
        language : "JavaScript",
        key : 4
    },
  ]
    
    return (
        <div>
            {users.map(user => {
            return  (<div key={user.key}>   
            <h1>Name is {user.name}</h1>    
            <h1>Age is {user.age}</h1>
            </div>)
            })}    
        </div>
    )
}

export default UserList
