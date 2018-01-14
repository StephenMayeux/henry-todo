import React, { Component } from 'react';
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      todoItem: ''
    };
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addTodoItem() {
    const { items, todoItem } = this.state;
    items.push(todoItem);
    this.setState({
      items,
      todoItem: ''
    });
  }

  renderItems() {
    if (this.state.items.length === 0) {
      return (
        <li>Empty List. Add Items</li>
      );
    }
    return this.state.items.map((item, idx) => {
      return (
        <li key={idx}>{item}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="app-title">Todo App</h1>
        <div className="form-wrapper">
          <input
            value={this.state.todoItem}
            onChange={this.handleInputChange.bind(this)}
            name="todoItem"
            placeholder="Type Item here"
          />
          <button
            onClick={this.addTodoItem.bind(this)}
          >
            Add Item
          </button>
        </div>
        <div>
          <ul>{this.renderItems()}</ul>
        </div>
      </div>
    );
  }
}

// const App = () => {
//   const name = 'Henry';
//   return (
//     <h1>{`Hello there, ${name}`}</h1>
//   );
// }

// export default App;
