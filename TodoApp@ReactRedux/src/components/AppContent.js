import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from "./TodoItem";

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  return(
      <>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => (<TodoItem key={todo.id} todo={todo} />))
        ) : (
            <p> No Todos </p>
        )}
      </>
  );
}

export default AppContent;