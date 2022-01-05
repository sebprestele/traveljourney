import React from "react"
import Nav from "./Nav"
import data from "./data"
import Journey from "./Journey"

export default function App () {

const journeys = data.map(item => {
    return (
        <Journey
        item = {item}
        />
    )
})    
          
    
  

    return (
        <div>
            <Nav />
            <main>
            {journeys}
            </main>
        </div>
        
    )
}