import React from 'react'

const Home = () => {
    return (
        <div>
           <div>I'm  Component</div> 
            <button onClick={() => {
                console.log('Clicked')
            }}>Click me!</button>
        </div>
    )
}

export default Home
