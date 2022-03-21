import ToDoItem from "./ToDoItem.js";
import todos from "./todos.json";
const ToDoList = () => { return(
    <ul>
        {
            todos.map(todo => {
                return(<ToDoItem todo={todo}/>);
            })
        }
    </ul>
 );
}
export default ToDoList;