import React, { useState, useEffect } from 'react';
import './App.css';
import Compleated from './compleated';
import {DeleteRounded as DeleteIcon, Done} from '@material-ui/icons';
import ToDO from './ToDO';
import validator from 'validator';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
const App = () => {
  const [inputList, setInputList] = useState({
    title:"",
    body:"",
    date:"",
  });
  const [Items, setItems] = useState([]);
  const ChangeItemEvent = (e) => {
    setInputList({ ...inputList, [e.target.name]: e.target.value });
  }
  const isvalidrecepie = (props)=>{
    if (!props.title) {
      alert("Title is required");
      return false;
    }        
    if(!props.body){
      alert("body is required");
      return false;
    }
    if(!props.date){
      alert("Date is required");
      return false;
    }
    if (!validator.isDate(props.date)) {
      alert("Wrong date format");
      return false;
    }
    return true;
  }
  const SetlistOfItems = (e) => {
    if(isvalidrecepie(inputList)){
      setItems((oldItemsArray) => {
        return [...oldItemsArray, inputList];
      });
      alert("Recepie added successfully");
      setInputList({
        title:"",
        body:"",
        date:"",
      });
    }
  }
  const deleteItems = (id)=>{
    setItems((oldItemsArray)=>{
      return Items.filter((arrayElem, index)=>{
        return index !== id;
      })
    })
    alert(`Item number ${id+1} deleted`);
  }
  return (
    <>
      <Link to={"/login"}> <Button>Logout</Button></Link>
      <div className="main_div" >
        <div className="center_div">
          <br />
          <h1>Recepie</h1>
          <br />
          <div style={{display:'flex', flexDirection:'row', marginRight:20,marginLeft:20}}>
            <input className="input" name='title' value={inputList.title} onChange={ChangeItemEvent} type="text" placeholder="Title" />
            <input className="input" name='body' value={inputList.body} onChange={ChangeItemEvent} type="text" placeholder="Body" />
            <input className="input" name='date' value={inputList.date} onChange={ChangeItemEvent} type="date" placeholder="Date" />
            <input className="button" onClick={SetlistOfItems} type="button" value="+" />  
          </div>
          <p style={{color:"white",fontSize:'20px',marginTop:10}}>Listed Items</p>
          <ol>
            {Items.map((curretItem, index) => {
              return (
                <div className="todo_style">
                  <div><li>{curretItem.title}<br/>{curretItem.body}<br/>{curretItem.date}</li></div>
                    <div className="icons">
                      <DeleteIcon className="fa fa-times" onClick={()=>{deleteItems(index)}} />
                    </div>
                </div>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  );
 }
export default App;
