import React from "react";
const ToDO = (props) =>{
    
    return(
        <div className="todo_style">
            <div><li>{props.name}</li></div>
            <div className="icons">
            <i className="fa fa-times" onClick={()=>{props.onSelect(props.id)}}></i>
            <i className="fa fa-check" onClick={()=>{props.onComplete(props.id,props.name)}}></i>
            </div>
        </div>
    )
}
export default ToDO;