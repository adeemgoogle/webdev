let addMessage = document.querySelector('.input'), // получаем элемент с цсс чтобы менять и тд
addButton = document.querySelector('.bbtn'),
todo = document.querySelector('.todo'), // список
btn = document.querySelector('.deello');

let todoList = [];л
if (localStorage.getItem('todo')){ // если есть данные то возвращаем их 
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
    console.log(addMessage.value);
    addMessage.value = "";
    //addMessage.="";
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList)); // сохраняем только строки сетайтем новое значение 

});

function displayMessages(){
    let displayMessage ="";
    todoList.forEach(function(item, i) // перебираем массив туду лист . объект,  индекс, айтем 
    {
        displayMessage += ` 
        <li>
            <input type="checkbox" id = 'item_${i}' ${item.checked ? 'checked':""}> 
            <label for item = 'item_${1}'> ${item.todo}</label>
            <img src = "del.png" width=20px height = 20px>
        </li>
        ` 
        // += пушто добавляем много списков
        ;
        todo.innerHTML = displayMessage; // добавляем в верстку innerhtml take html in string
        
    });
}


todo.addEventListener('click', function(event) // 
{
    
    event.preventDefault(); // отмена стандартного поведения браузера
    todoList.forEach(function(item){
        if(item.todo ){ //ивент таргет это лейбл иннер это текст сравниваем с эл большого массива //
            todoList.splice(item,1); // удаляем 1 элемент
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
            todo.innerHTML = displayMessage;
             // 
        }   


    });

});

