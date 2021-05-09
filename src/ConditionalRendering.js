import React from 'react'

function ConditionalRendering(isLoggedIn) {
   
// If the condition is true i want to render something but if it is false
// i dont want to render anything 
      return (
          <div>
              {isLoggedIn && <h1>You are logged in</h1>}
          </div>
      )  


//    return (     Type 3 TernaryOPERATOR
//        <div>
//            {isLoggedIn ? <h1> You are logged in </h1> : <h1> Please log in </h1>}
//        </div>
//    )
   
   
   
    // let message;      Type 2 Element variable method
    // if (isLoggedIn)
    // {
    //     message = <h1>You are logged in</h1>
    // }
    // else{
    //     message = <h1>Please sign in</h1>
    // }
    // return (
    //     <div>
    //         {message}
    //     </div>
    // )
    
    // return (         Type 1 IfElse
    //     <div>
    //         <h1>You are logged in</h1>
    //     </div>
    // )
    // else{
    //     return (
    //     <div>
    //         <h1>Please log in</h1>
    //     </div>
    //     )
    // }
}

export default ConditionalRendering
