import { useState } from "react"

export default function App(){
  const [feed,setFeed] = useState(()=>{
    const storedFeed = localStorage.getItem("abc-feed-lib")
    if(!storedFeed)return[]
    return JSON.parse(storedFeed)
  })
  const [email,setEmail] = useState("")
  const [comentario,setComentario] = useState("")

  const addFeed =({email,comentario})=>{
    const id = Math.floor(Math.random()*1000)
    const feed = {id,email,comentario}
    setFeed(State =>{
      const newState = [...State,feed] 
      localStorage.setItem("abc-feed-lib",JSON.stringify(newState))
      return newState
    })
  }
/* enviar o que esta no email e no comentario  add */
  const enviar = (ev) =>{
    ev.preventDefault()
    addFeed({email,comentario})
    setEmail("")
    setComentario("")
  }
  const removeFeed = (id) => {
    setFeed(State =>{
      const newState = State.filter(feed => feed.id !== id)
      localStorage.setItem("abc-feed-lib",JSON.stringify(newState))
      return newState
    })
  }


  return(
    <div className="app">
      <h1 className="App">Seção de Comentário</h1>
      <form onSubmit={enviar} > 
        <div>
          <label htmlFor="Email">Email:</label>
          <input 
            type="email" 
            id="Email" 
            value={email}
            onChange={(ev)=>setEmail(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Comentario">Comentário:</label>
          <textarea 
            id="Comentario" 
            rows={10} 
            cols={40}maxLength={500}
            value={comentario}
            onChange={(ev)=>setComentario(ev.target.value)}/* serve para pergar a infomacao do comentario quando for enviado */
          ></textarea>
        </div>
        <button type="submit">Enviar comentário</button>
      </form>
      <hr />
      <div className="feeds">
        { feed.map((feeds) =>(
          <div key={feeds.id}>
            <h4>{feeds.email}</h4>
            <div>
              <h5>{feeds.comentario}</h5>
              <button onClick={()=> removeFeed(feeds.id)}>Apagar comentario</button>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}