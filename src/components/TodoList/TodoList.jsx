import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { List } from "./TodoList.styled";

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }


  render() {
    return <List>
      {this.props.tasks.map(({text, completed}, index) => 
      <TodoItem key={index} 
           id={index} 
           text={text} 
           completed={completed} 
           onChangeValue={this.props.onChangeValue}
           onDelete={this.props.onDelete}
      />
    )}  
    </List>
  }
}

export default TodoList;
