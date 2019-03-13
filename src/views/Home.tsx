import React, { Component } from 'react';
import './Home.css';

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

  handleCompletedChange = (id: number) => {
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
          {this.state.todoList.length ? (
            <div className="Card-Text">
              <ul className="TodoList">
                {this.state.todoList.map(todo => (
                  <li className="Todo" key={todo.id}>
                    <div
                      style={{
                        marginRight: '15px',
                        flex: '0 0 24px',
                        height: '24px',
                      }}
                    >
                      <i
                        className="material-icons"
                        style={{
                          color: todo.completed ? '#82b1ff' : 'rgba(0,0,0,.54)',
                          cursor: 'pointer',
                        }}
                        onClick={() => this.handleCompletedChange(todo.id)}
                      >
                        {todo.completed ? 'check_box' : 'check_box_outline_blank'}
                      </i>
                    </div>
                    <div
                      style={{
                        flex: '1 1 0',
                        marginRight: '15px',
                        height: '24px',
                      }}
                    >
                      <h4
                        style={{
                          margin: 0,
                          textDecoration: todo.completed ? 'line-through' : '',
                          lineHeight: '24px',
                        }}
                        onClick={() => this.handleCompletedChange(todo.id)}
                      >
                        {todo.content}
                      </h4>
                    </div>
                    <div
                      style={{
                        flex: '0 0 24px',
                        height: '24px',
                      }}
                    >
                      <i
                        className="material-icons"
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.removeTodo(todo.id)}
                      >
                        close
                      </i>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
