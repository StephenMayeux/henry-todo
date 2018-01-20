import React, {Component} from 'react';
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      todoItem: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addTodoItem() {
    const { items, todoItem } = this.state;
    const item = {
      text: todoItem,
      completed: false,
      id: Date.now()
    };
    items.push(item);
    this.setState({ items, todoItem: ''});
  }

  changeState(id) {
    const { items } = this.state;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items[i].completed = !items[i].completed
        break;
      }
    }
    this.setState({ items });
  }

  renderItems() {
    if (this.state.items.length === 0) {
      return <li>Empty List. Add Items</li>
    }
    return this.state.items.map((item, idx) => {
      return (
        <li key={idx}>
          <button
            id={idx}
            onClick={(e) => this.changeState(item.id)}
            className={item.completed ? "completed-item" : null}
          >
            {item.text}
          </button>
        </li>
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
            onChange={this.handleInputChange}
            name="todoItem"
            placeholder="Type Item here"
          />
          <button onClick={this.addTodoItem}>
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
