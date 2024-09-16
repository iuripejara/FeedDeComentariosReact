import PropTypes from "prop-types" //npm i prop-types

TextInput.PropTypes = {
    id : PropTypes.string,
    labal : PropTypes.string,
    value : PropTypes.string,
    setValue : PropTypes.func
}


export default function TextInput ({id,label,value,setValue}){
    return (
        <div>
          <label htmlFor={id}>{label}:</label>
          <input 
            type="email" 
            id={id} 
            value={value}
            onChange={(ev)=>setValue(ev.target.value)}
          />
        </div>
    )
}