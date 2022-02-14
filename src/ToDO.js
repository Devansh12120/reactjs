import React from "react";
import {DeleteRounded as DeleteIcon, Done} from '@material-ui/icons';
const ToDO = (props) =>{
    console.log(props)
    return(
        <div className="todo_style">
            <div className="links">
                <div><li>{props.title}</li></div>
                <div><li>{props.body}</li></div>
                <div><li>{props.date}</li></div>
            </div>
            <div className="icons">
            <DeleteIcon className="fa fa-times" onClick={()=>{props.onSelect(props.id)}} />
            <Done className="fa fa-check" onClick={()=>{props.onComplete(props.id,props.name)}}/>
            </div>
        </div>
    )
}
export default ToDO;