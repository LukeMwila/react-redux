import React, { Component } from 'react';
import { connect } from "react-redux";

const List = (props) => {

  let thingsToDo;

  if(props.thingsToDo.list.length > 0){
    thingsToDo = props.thingsToDo.list.map((item) => {
       return <li key={item}>{item}</li> 
    });

  }else{
    thingsToDo = "Nothing to do";
  }

  return(
    <ul>{thingsToDo}</ul>
  );
}

export default List;


