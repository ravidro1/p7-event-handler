import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ContextR } from '../App';

function EditEvent(props) {

    const loc = useLocation();
    const {eventArray, setEventArray} = useContext(ContextR);

    const [tempKey, setTempKey] = useState("");
    const [tempKeyValue, setTempKeyValue] = useState("");

    function onChange(data){
        setTempKeyValue(data.target.value)
    }

    function onClick(){
        eventArray[loc.state.index][tempKey] = tempKeyValue;
        console.log("click!!");
        setTempKeyValue("");
    }

    function inputHandelr(key){
        if(key != tempKey){
            setTempKey(key);
            setTempKeyValue("");
        }else{
            setTempKey("");
        }
    }

    return (
        <div>
            <NavLink to={"/"}> Home Page </NavLink>

            <h1> Edit Event </h1>
            {loc.state && <ul> {Object.keys(eventArray[loc.state.index]).map((key, index) => <li key={index}> {key}: {"  "} {eventArray[loc.state.index][key]} </li>)} </ul>}
            {loc.state && Object.keys(eventArray[loc.state.index]).map((key, index) => <button key={index} onClick={() => inputHandelr(key)}> {key} </button>)}
            
            {tempKey && <div> <input value={tempKeyValue} onChange={onChange} placeholder={tempKey}/> <button onClick={onClick}> {tempKey} </button> </div>}
        </div>
    );
}

export default EditEvent;