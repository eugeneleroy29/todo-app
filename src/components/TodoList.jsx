import { TodoCard } from "./TodoCard";

export function TodoList(props) {

  const { todos, selectedTab } = props;
  
  const filterTodoslist = selectedTab === 'All' ?
    todos :
    selectedTab === 'Completed' ?
      todos.filter(val => val.complete) :
      todos.filter(val => !val.complete);

  return (
    <div className="todo-list">
      {filterTodoslist.map((todo, todoIndex) => {
        return (
          <TodoCard 
            key={todoIndex}
            todoIndex={todos.findIndex(val => val.input === todo.input)}
            {...props} 
            todo={todo} 
          />
        )
      })}
    </div>
  )
}