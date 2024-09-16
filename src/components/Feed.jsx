import PropTypes from "prop-types"

Feed.PropTypes = {
    email : PropTypes.string,
    comentario : PropTypes.string,
    removeFeed : PropTypes.func,
}
export default function Feed ({email,comentario,removeFeed}){
    return(
        <div>
            <h4>{email}</h4>
            <div>
              <h5>{comentario}</h5>
              <button onClick={removeFeed}>Apagar comentario</button>
              <hr />
            </div>
        </div>
    )
}