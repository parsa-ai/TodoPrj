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
const AddItem = () => {
    const text = document.getElementById('AddInput').value;
    if (text !== '') {
        if (Todo_List.includes(text)) {
            NewMa(`${text} is already in the list`);
        } else {
            Todo_List.push(text);
            Todolist(Todo_List);
            NewMa(`${text} Added`, true);
        }
    } else {
        NewMa('Input is empty');
    }
};

const FinishedItem = (btn) => {
    Todo_List = Todo_List.filter(work => work !== btn.id);
    Finished_list.push(btn.id);
    Todolist(Todo_List);
    Finishedlist(Finished_list);
    NewMa(`${btn.id} Finished`, true);
};

const RemoveItem = (btn) => {
    Finished_list = Finished_list.filter(item => item !== btn.id);
    NewMa(`${btn.id} removed`);
    Finishedlist(Finished_list);
};
const delay = (delayInms) => new Promise(resolve => setTimeout(resolve, delayInms));

const NewMa = async (m = 'Error', t = false) => {
    const x = document.getElementById('text-box');
    x.className = `text-box ${t ? 'ok' : 'err'}`;
    x.style.opacity = '0%';
    x.innerHTML = `<p>${m}</p>`;
    x.style.opacity = '100%';
    await delay(1500);
    x.style.opacity = '0%';
};

// هنگام بارگذاری صفحه لیست‌ها را از LocalStorage بخوانید
window.onload = () => {
    Todolist(Todo_List);
    Finishedlist(Finished_list);
};
