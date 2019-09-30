import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const todoData = [
  {
  task: 'Do Laundry',
  id: 123,
  completed: false
},
{
  task: 'Buy Groceries',
  id: 213,
  completed: false
}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoData
    }
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  toggleItem = id => {
    console.log(id)
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id===id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };


  render() {
    return (
      <div className="todo-container">
        <h2>My Todo List</h2>
        <TodoForm addItem ={this.addItem} />
        <div className='list-container'>
          <TodoList 
            todos={this.state.todos}
            toggleItem={this.toggleItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
