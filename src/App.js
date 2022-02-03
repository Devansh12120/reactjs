import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Compleated from './compleated';
import ToDO from './ToDO';
const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const [completeItems, setCompleteItems] = useState([]);
  const ChangeItemEvent = (e) => {
    setInputList(e.target.value);
  }
  const SetlistOfItems = (e) => {
    setItems((oldItemsArray) => {
      return [...oldItemsArray, inputList];
    });
    console.log(Items);
    setInputList("");
  }
  const deleteItems = (id)=>{
    setItems((oldItemsArray)=>{
      return Items.filter((arrayElem, index)=>{
        return index !== id;
      })
    })
    alert(`Item number ${id+1} deleted`);
  }
  const deleteCompleteItems =(id)=>{
    setCompleteItems((oldItemsArray)=>{
      return completeItems.filter((arrayElem,index)=>{
        return index !== id;
      })
    })
    alert(`Compleated Item number ${id+1} successfully deleted `);
  }
  const markComplete =(id,text)=>{
    setItems((oldItemsArray)=>{
      return Items.filter((arrayElem, index)=>{
        return index !== id;
      })
    })
    setCompleteItems((oldItemsArray) => {
      return [...oldItemsArray, text];
    });
    alert(`Status of item number ${id+1} successfully marked as compleated `);
    console.log(completeItems);
  }
  return (
    <>
      <div className="main_div" >
        <div className="center_div">
          <br />
          <h1>To - Do List</h1>
          <br />
          <input className="input" value={inputList} onChange={ChangeItemEvent} type="text" placeholder="Enter Item" />
          <input className="button" onClick={SetlistOfItems} type="button" value="+" />
          <p>Listed Items</p>
          <ol>
            {Items.map((curretItem, index) => {
              return <ToDO name={curretItem} key={index} id={index} onComplete={markComplete} onSelect={deleteItems} />
            })}
          </ol>
          <p>compleated Items</p>
          <ol>
            {completeItems.map((curretItem, index) => {
              return <Compleated name={curretItem} key={index} id={index} onSelect={deleteCompleteItems} />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
