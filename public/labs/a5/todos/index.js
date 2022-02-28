alert('Hello World!');
import ToDoList from "./ToDoList.js";

$('#wd-todo').append(`
<div class="container">
    <h1>Todo example</h1>
</div>
 `);

$('#wd-todo').append(` <div class="container">
<h1>Todo example</h1>
${ToDoList()}
</div> `);
