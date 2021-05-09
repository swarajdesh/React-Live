import React from 'react'

function EventHandling() {
    
    const onClickHandler = (name) => {
        alert("button was clicked by " + name)
    }

    const multipleStateFunc = () => {
        onClickHandler('Simran');
        console.log("multiple state");
    }

    return (
        <div>
            <button onClick={()=>onClickHandler('Simran')}>Click me</button>
            <button onClick={multipleStateFunc}>Click me</button>
        </div>
    )
}

export default EventHandling
