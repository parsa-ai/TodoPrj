let Todo_List = JSON.parse(localStorage.getItem('Todo_List')) || [];
let Finished_list = JSON.parse(localStorage.getItem('Finished_list')) || [];

const Todolist = (Todo_List) => {
    const ul = document.getElementById('todo');
    let items = Todo_List.map(work => `
        <li class="item">
            <div><p class="title">${work}</p></div>
            <button class="Finished-btn" onclick="FinishedItem(this)" id="${work}">Finished</button>
        </li>`).join('');
    ul.innerHTML = items;
    localStorage.setItem('Todo_List', JSON.stringify(Todo_List));
};

const Finishedlist = (Finished_list) => {
    const ul = document.getElementById('Finished');
    let items = Finished_list.map(work => `
        <li class="item">
            <div><p class="title remove">${work}</p></div>
            <button class="Remove" onclick="RemoveItem(this)" id="${work}">Remove</button>
        </li>`).join('');
    ul.innerHTML = items;
    localStorage.setItem('Finished_list', JSON.stringify(Finished_list));
};