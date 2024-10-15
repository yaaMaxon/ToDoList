import React from "react";
import { Form, Input, Label, AddTask } from "./TodoListForm.styled";

class TodoListForm extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        task: {
            text: '',
        }
      }
    }

    handleSubmit = e => {
      e.preventDefault()

      const validValue = e.target.elements.task.value;
      
      if (validValue !== '') {
          
        this.props.onTodoListUpdate(this.state.task)

      } else {
        alert('Enter valid value')
      }

      this.setState({
        task: {
            text: '',
        }
      }) 
    }

    onSetTask = e => {
        this.setState({
          task: {
            text: e.target.value,
            completed: false
          }
        })
    }

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <Label htmlFor="task">Enter new task</Label>
            <Input type="text" name='task' id='task' value={this.state.task.text} onInput={this.onSetTask}/>
            <AddTask type="submit">Add task</AddTask>
        </Form>
    }
}

export default TodoListForm;