export function TodoCard(props) {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo, editIndex, setEditIndex, editValue, setEditValue } = props;

  const isEditing = editIndex === todoIndex;  

  return (
    <div className="card todo-item">
      {isEditing ? (
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleEditTodo(todoIndex, editValue);
            }
          }}
        />
      ) : (
        <p>{todo.input}</p>
      )}

      <div className="todo-buttons">
        <button 
          onClick={() => {
            handleCompleteTodo(todoIndex)
          }}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button onClick={() => {
          if (isEditing) {
            handleEditTodo(todoIndex, editValue);
          } else {
            setEditIndex(todoIndex);
            setEditValue(todo.input);
          }
        }}>
          <h6>{isEditing ? 'Save' : 'Edit'}</h6>
        </button>
        <button onClick={() => {
          handleDeleteTodo(todoIndex)
        }}> 
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}