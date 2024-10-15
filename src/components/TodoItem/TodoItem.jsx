import React from "react";
import { ListItem, DeleteBtn, Task } from "./TodoItem.styled";

class TodoItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    handleClick = e => {
      if (e.target.nodeName === 'SPAN') {
          this.props.onChangeValue(this.props.id)
      }
    }

    handleDelete = e => {
        if (e.target.nodeName === 'BUTTON') {
            this.props.onDelete(this.props.id)
        }
    }

    render() {
        return <ListItem onClick={this.handleClick}>
          <Task style={{textDecoration: this.props.completed && 'line-through red'}}>
            {this.props.text}
          </Task>
          <DeleteBtn type="button" onClick={this.handleDelete}>Delete</DeleteBtn>
        </ListItem>
    }
}

export default TodoItem;