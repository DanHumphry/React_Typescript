import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../modules';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';

function TodoList() {
  const todos = useTodos();
// const todos = useSelector((state : RootState) => state.todos)

  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;