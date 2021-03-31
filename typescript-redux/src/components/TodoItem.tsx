import React from 'react';
import './TodoItem.css';
import { Todo } from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';
// import { useDispatch } from 'react-redux';
// import {toggleTodo, removeTodo} from '../modules/todos'

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  // const dispatch = useDispatch();

  // const onToggle = useCallback(()=>{
  //   dispatch(toggleTodo(todo.id))
  // }, [todo, dispatch])
  // const onRemove = useCallback(()=>{
  //   dispatch(removeTodo(todo.id))
  // }, [todo, dispatch])

  const { onToggle, onRemove } = useTodoActions(todo.id);

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;