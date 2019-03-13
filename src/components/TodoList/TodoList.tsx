import React from 'react';
import './TodoList.css';

interface TodoList {
  id: number;
  content: string;
  completed: boolean;
}

type Props = {
  todoList: TodoList[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  active: number;
};

const todoList = (props: Props) => {
  let filterList;
  switch (props.active) {
    case 1:
      filterList = props.todoList.filter(todo => !todo.completed);
      break;
    case 2:
      filterList = props.todoList.filter(todo => todo.completed);
      break;
    default:
      filterList = props.todoList;
  }
  return (
    <ul className="TodoList">
      {filterList.map(todo => (
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
              onClick={() => props.toggleTodo(todo.id)}
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
              onClick={() => props.toggleTodo(todo.id)}
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
            <i className="material-icons" style={{ cursor: 'pointer' }} onClick={() => props.removeTodo(todo.id)}>
              close
            </i>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default todoList;
