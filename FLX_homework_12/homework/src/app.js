const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

// Your code goes here
const mainHash = document.querySelector('#mainHash');
const addHash = document.querySelector('#addItemHash');
const modifyHash = document.querySelector('#modItemHash');
const inputValue = document.querySelector('#newItemName');
const addButton = document.querySelector('#addItemToList');
const taskList = document.querySelector('#taskList');
let counter = 0;
let itemName = document.querySelector('#modItemName');
const unbelievableZero = 0;

function addItemHash () {
	location.hash = '/add';
	mainHash.style.display = 'none';
	addHash.style.display = 'block';
}

function cancelBut () {
	history.back();
	mainHash.style.display = 'block';
	addHash.style.display = 'none';
	modifyHash.style.display = 'none';
}

function checkInput () {
	addButton.setAttribute('disabled', true);
	inputValue.addEventListener('input', empty => {
		if (inputValue.value !== '') {
			addButton.disabled = false;
		} else {
			addButton.disabled = true;
		}
	})
}
checkInput();

function newItem () {
	if (inputValue.value === '') {
		addButton.disabled = true;
	} else {
	let newListItem = document.createElement('div');
	newListItem.className = 'listItem';
	let newDoneButton = document.createElement('img');
	newDoneButton.setAttribute('src', 'assets/img/todo-s.png');
	newDoneButton.setAttribute('alt', 'checkbox');
	newDoneButton.setAttribute('onclick', 'checkItem(this)');
	let newTextItem = document.createElement('span');
	newTextItem.setAttribute('onclick', 'modifyItemName(this)');
	newTextItem.innerHTML = inputValue.value;
	let newRemoveButton = document.createElement('img');
	newRemoveButton.setAttribute('src', 'assets/img/remove-s.jpg');
	newRemoveButton.setAttribute('alt', 'Remove task');
	newRemoveButton.setAttribute('onclick', 'removeItem(this)');
	let taskList = document.getElementById('taskList');
	taskList.appendChild(newListItem);
	newListItem.appendChild(newDoneButton);
	newListItem.appendChild(newTextItem);
	newListItem.appendChild(newRemoveButton);
	inputValue.value = '';
	counter++;
	history.back();
	mainHash.style.display = 'block';
	addHash.style.display = 'none';
	modifyHash.style.display = 'none';
	if (counter > unbelievableZero) {
			let message = document.getElementById('message');
			message.classList.add('showNone');
		} else {
			let message = document.getElementById('message');
			message.classList.remove('showNone');
		}
	}
}

function checkItem (el) {
	el.setAttribute('src', 'assets/img/done-s.png');
	el.parentNode.style.background = '#696969';
	el.parentNode.parentNode.removeChild(el.parentNode);
	let doneList = document.querySelector('#doneList');
	doneList.appendChild(el.parentNode);
} 

function removeItem (el) {
	el.parentNode.parentNode.removeChild(el.parentNode);
	counter--;
	if (counter === unbelievableZero) {
			let message = document.getElementById('message');
			message.classList.remove('showNone');
		} else {
			let message = document.getElementById('message');
			message.classList.add('showNone');
		}
}

function modifyItemName (el) {
	location.hash = '/modify/';
	mainHash.style.display = 'none';
	modifyHash.style.display = 'block';
	itemName.value = el.innerHTML;
}

function changeName () {
	history.back();
	mainHash.style.display = 'block';
	addHash.style.display = 'none';
	modifyHash.style.display = 'none';
}
