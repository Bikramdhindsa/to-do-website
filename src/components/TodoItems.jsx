import './css/TodoItems.css';

const TodoItems = ({ no, display, text, todos, fn }) => {

    const btnOnclick = ()=>{
        const updatedTodos = todos.filter(todo => todo.no !== no);
        fn(updatedTodos);
    }
  return (
    <div className='todo-items'>
      <div className="todoitems-container">
        <input type="checkbox" className="todoitems-checkbox" id={`todo-item-${no}`} />
        <label htmlFor={`todo-item-${no}`} className="todoitems-text">{text}</label>
        <button className="delete-item" onClick={btnOnclick}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItems;
