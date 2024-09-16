import PropTypes from "prop-types" //npm i prop-types

TextAreaInput.PropTypes ={
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    setValue: PropTypes.func
}


export default function TextAreaInput({id,value,label,setValue}){
    return(
        <div>
            <label htmlFor={id}>{label}:</label>
        <textarea 
            id={id} 
            rows={10} 
            cols={40}maxLength={500}
            value={value}
            onChange={(ev)=>setValue(ev.target.value)}/* serve para pergar a infomacao do comentario quando for enviado */
        ></textarea>
        </div>
        
    )
}