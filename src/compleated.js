import React from "react";
const Compleated = (props) =>{
    
    return(
        <div className="todo_style">
            <div><li>{props.name}</li></div>
            <div className="icons">
            <i className="fa fa-times" onClick={()=>{props.onSelect(props.id)}}></i>
            </div>
        </div>
    )
}
export default Compleated;