import React from "react";
import {DeleteRounded as DeleteIcon, Done} from '@material-ui/icons';
const Compleated = (props) =>{
    
    return(
        <div className="todo_style">
            <div><li>{props.name}</li></div>
            <div className="icons">
            <DeleteIcon className="fa fa-times" onClick={()=>{props.onSelect(props.id)}} />
            </div>
        </div>
    )
}
export default Compleated;