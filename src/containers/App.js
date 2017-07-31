import React, { Component } from 'react';
import { connect } from "react-redux";
import { addItem } from "../actions/ToDoActions";
import List from "../components/List";

const App = (props) => {

    let input;

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                props.addItem(input.value)
                input.value = ''
            }}
            >
                <input type="text"
                    ref={node => {
                        input = node
                    }}
                />
                <br />
                <button type="submit">Add Item</button>
            </form>
            <br />
            <List thingsToDo={props.list} />
        </div>
    ); 
}

const mapStateToProps = (state) => {
  return{
    list: state.toDoReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);