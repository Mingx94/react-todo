import React, { Component } from 'react';
import './Home.css';
import TodoList from '../../components/TodoList/TodoList';

class Home extends Component<{ active: number }, { todoList: object[] }> {
  state = {
    todoList: [
      {
        id: 1,
        content: 'vue todo',
        completed: true,
      },
      {
        id: 2,
        content: 'react todo',
        completed: true,
      },
    ],
  };

  private inputEl = React.createRef<HTMLInputElement>();

  toggleTodo = (id: number) => {
    let newTodoList = this.state.todoList.map(todo => ({ ...todo }));
    let index = newTodoList.findIndex(todo => todo.id === id);
    newTodoList[index].completed = !newTodoList[index].completed;

    this.setState({ todoList: newTodoList });
  };
  pushNewTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toUpperCase() !== 'ENTER') return;

    const node = this.inputEl.current;
    if (node && node.value) {
      let newTodoList = [
        ...this.state.todoList,
        {
          id: Number(new Date()),
          content: node.value,
          completed: false,
        },
      ];
      this.setState({ todoList: newTodoList });
      node.value = '';
    }
  };
  removeTodo = (id: number) => {
    let newTodoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({ todoList: newTodoList });
  };

  render() {
    
  let filterList;
  switch (this.props.active) {
    case 1:
      filterList = this.state.todoList.filter(todo => !todo.completed);
      break;
    case 2:
      filterList = this.state.todoList.filter(todo => todo.completed);
      break;
    default:
      filterList = this.state.todoList;
  }
    return (
      <div className="Home">
        <div className="Card">
          <div className="Card-Title" style={{ paddingBottom: this.state.todoList.length ? 0 : '' }}>
            <input
              className="Input-New"
              ref={this.inputEl}
              onKeyPress={this.pushNewTodo}
              type="text"
              placeholder="What need to be done?"
            />
          </div>
          {filterList.length ? (
            <div className="Card-Text">
              <TodoList
                todoList={filterList}
                removeTodo={this.removeTodo}
                toggleTodo={this.toggleTodo}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
