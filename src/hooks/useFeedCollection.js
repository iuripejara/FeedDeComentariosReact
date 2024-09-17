import { useState } from "react"

export default function useFeedCollection(){
    const [feed,setFeed] = useState(()=>{
        const storedFeed = localStorage.getItem("abc-feed-lib")
        if(!storedFeed)return[]
        return JSON.parse(storedFeed)
    })
    const addFeed =({email,comentario})=>{
        const id = Math.floor(Math.random()*1000)

        const feed = {id,email,comentario}
        
        setFeed(State =>{
            const newState = [...State,feed] 
            localStorage.setItem("abc-feed-lib",JSON.stringify(newState))
            return newState
        })
        console.log(hors)
    }
    const removeFeed = (id) => {
        setFeed(State =>{
          const newState = State.filter(feed => feed.id !== id)
          localStorage.setItem("abc-feed-lib",JSON.stringify(newState))
          return newState
        })
      }
    return {addFeed,removeFeed,feed}
}