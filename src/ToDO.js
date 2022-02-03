import React from "react";
import {DeleteRounded as DeleteIcon, Done} from '@material-ui/icons';
const ToDO = (props) =>{
    
    return(
        <div className="todo_style">
            <div><li>{props.name}</li></div>
            <div className="icons">
            <DeleteIcon className="fa fa-times" onClick={()=>{props.onSelect(props.id)}} />
            <Done className="fa fa-check" onClick={()=>{props.onComplete(props.id,props.name)}}/>
            </div>
        </div>
    )
}
export default ToDO;