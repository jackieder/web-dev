import ToDoItem from "./ToDoItem.js";
import todos from "./todos.js";
const ToDoList = () => { return(`
<ul>
 ${
    todos.map(todo => {
        return(ToDoItem(todo));
    }).join('')
}
</ul> `);
}
export default ToDoList;