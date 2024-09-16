import PropTypes from "prop-types" //npm i prop-types
import { useState } from "react"
import TextInput from "./TextInput"
import TextAreaInput from "./TextAreaInput"

NewFeedForm.PropTypes = {
    addFeed : PropTypes.func
}

export default function NewFeedForm({addFeed}){
    const [email,setEmail] = useState("")
    const [comentario,setComentario] = useState("")

    /* enviar o que esta no email e no comentario  add */
    const enviar = (ev) =>{
        ev.preventDefault()
        addFeed({email,comentario})
        setEmail("")
        setComentario("")
    }

    return(
        <form onSubmit={enviar} > 
            <TextInput  
                id="email" 
                label="Email:" 
                value={email} 
                setValue={setEmail} />
            <TextAreaInput 
                id="comentario" 
                label="comentario" 
                value={comentario} 
                setValue={setComentario}
            />
        <button type="submit">Enviar comentário</button>
      </form>
    )

}