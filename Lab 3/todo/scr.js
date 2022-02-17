let addMessage = document.querySelector('.input'),
addButton = document.querySelector('.bbtn'),
todo = document.querySelector('.todo'),
btn = document.querySelector('.del');

let todoList = [];
if (localStorage.getItem('todo')){
    todoList =JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', function(){
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    }

    todoList.push(newTodo);

    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages(){
    let displayMessage ="";
    todoList.forEach(function(item, i)
    {
        displayMessage += `
        <li>
            <input type="checkbox" id = 'item_${1}' ${item.checked ? 'checked':""}>
            <label for item = 'item_${1}'> ${item.todo}</label>
        </li>
        `
        ;
        todo.innerHTML = displayMessage;
        
    });
}
todo.addEventListener('contextmenu', function(event)
{
    event.preventDefault();
    todoList.forEach(function(item, i){
        if(item.todo === event.target.innerHTML){
            if(event.ctrlKey ) {
                todoList.splice(i,1);
            }
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }


    });

});
