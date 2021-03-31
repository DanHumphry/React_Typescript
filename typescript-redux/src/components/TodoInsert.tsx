import React, { ChangeEvent, FormEvent
  // , useCallback
  , useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {addTodo} from '../modules/todos'
import useAddTodo from '../hooks/useAddTodo';


function TodoInsert() {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  // const dispatch = useDispatch();
  const addTodo = useAddTodo();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };
  // const onSubmit = useCallback((e: FormEvent)=>{
  //   e.preventDefault();
  //   dispatch(addTodo(value))
  //   setValue('');
  // }, [dispatch, value])

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;