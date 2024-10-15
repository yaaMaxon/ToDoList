import React from "react";
import TodoList from "../TodoList";
import TodoListForm from "../TodoListForm";

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            tasks: [
            { text: 'Test', completed: false }
          ]
        }
    }
    
    componentDidMount() {
        this.setState({
            tasks: JSON.parse(localStorage.getItem('data')) || [
            { text: 'Test', completed: false }
          ]
        })
        
    }

    componentDidUpdate() {
        localStorage.setItem('data', JSON.stringify(this.state.tasks))
    }

    changeTodoList = (task) => {
        this.setState((prevState) => {
            return {
                tasks: [...prevState.tasks, task]
            }
        })
    }

    changeCompletedValue = index => {
        this.setState((prevState) => {
            const updatedTasks = prevState.tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        return { tasks: updatedTasks };
        })
    }

    deleteTodoItem = index => {
        this.setState((prevState) => {
          const updatedTasks = prevState.tasks.filter((_, i) => i !== index);
          return { tasks: updatedTasks };
        })
    }

    render() {
        return <>
          <TodoListForm onTodoListUpdate={this.changeTodoList}/>
          <TodoList tasks={this.state.tasks} onChangeValue={this.changeCompletedValue} onDelete={this.deleteTodoItem}/>
        </>
    }
}

export default App;