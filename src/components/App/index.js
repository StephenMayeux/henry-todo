import React, {Component} from 'react';
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      todoItem: '',
      idx: null
    };
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addTodoItem() {
    const {items, todoItem} = this.state;
    let idx = Date.now();
    items.push(todoItem);
    this.setState({items, todoItem: ''});
  }

  changeState(event) {
    const test = event.target;
    console.log(test);
    this.setState({textDecoration: 'line-through'});

  }

  renderItems() {
    if (this.state.items.length === 0) {
      return (<li>Empty List. Add Items</li>);
    }
    return this.state.items.map((item, idx) => {
      return (<li key={idx}>
        <button id={idx} style={{
            textDecoration: this.state.textDecoration
          }} className="strike" onClick={this.changeState.bind(this)}>{item}</button>
      </li>);
    });
  }

  render() {
    return (<div>
      <h1 className="app-title">Todo App</h1>
      <div className="form-wrapper">
        <input value={this.state.todoItem} onChange={this.handleInputChange.bind(this)} name="todoItem" placeholder="Type Item here"/>
        <button onClick={this.addTodoItem.bind(this)}>
          Add Item
        </button>
      </div>
      <div>
        <ul>{this.renderItems()}</ul>
      </div>
    </div>);
  }
}
