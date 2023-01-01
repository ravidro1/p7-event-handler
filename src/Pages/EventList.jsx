import React, { useContext, useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { ContextR } from '../App';

function EventList(props) {
    const {inputs, setInputs, eventArray, setEventArray} = useContext(ContextR);
    //navegate

    function resetLists(){
    setInputs({});
    setEventArray([]);
    }

    function remove(i){
        setEventArray(eventArray.filter((item, index) => index != i))
    }

    return (
        <div>
            <NavLink to={"/"}> <button> HomePage </button></NavLink>
            <button onClick={resetLists}> clear list </button>

            <h1> Event List</h1>
            {eventArray && eventArray.map((item,i) => <div style={{backgroundColor: item.colorOfEvent}} key={i}><h2> {i} </h2> <ul > {Object.keys(item).map((key, index) => <li key={index}> {key}: {"  "} {item[key]} </li>)} </ul>
            <button onClick={() => remove(i)}> remove </button>
            <NavLink to={`/EditEvent/${item.name}`} state={{index: i}}> <button> Edit </button> </NavLink>
             </div>)}
        
            
        </div>
    );
}

export default EventList;