let inputValue = document.querySelector('#addNewAction');
let newActionName = inputValue.value;
let itemName = document.createTextNode(inputValue.value);
let addButton = document.querySelector('#addButton');
let counter = 0;
let maxList = 10;
let one = 1;

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

function addItem () {
	if (inputValue.value === '') {
		addButton.disabled = true;
	} else {
	let newListItem = document.createElement('div');
	newListItem.className = 'listItem';
	newListItem.setAttribute('draggable', true);
    newListItem.setAttribute('ondragover', 'dragOver(ev)');
    newListItem.setAttribute('ondragstart', 'dragStart(ev)');
	let newDoneButton = document.createElement('button');
	newDoneButton.className = 'doneButton';
	let newIconCheckBox = document.createElement('i');
	newIconCheckBox.id = 'check_box';
	newIconCheckBox.className = 'material-icons';
	newIconCheckBox.innerHTML = 'crop_din';
	newIconCheckBox.setAttribute('onclick', 'doneItem(this)');
	let newTextItem = document.createElement('span');
	newTextItem.innerHTML = inputValue.value;
	let newDeleteButton = document.createElement('button');
	newDeleteButton.className = 'deleteButton';
	newDeleteButton.setAttribute('onclick', 'delItem(this)');
	newDeleteButton.setAttribute('name', 'delete')
	let newIconDelete = document.createElement('i');
	newIconDelete.className = 'material-icons';
	newIconDelete.innerHTML = 'delete';
	let todoList = document.getElementById('todoList');
	todoList.appendChild(newListItem);
	newListItem.appendChild(newDoneButton);
	newDoneButton.appendChild(newIconCheckBox);
	newListItem.appendChild(newTextItem);
	newListItem.appendChild(newDeleteButton);
	newDeleteButton.appendChild(newIconDelete);
	counter++;
	inputValue.value = '';
	addButton.disabled = true;
		if (counter === maxList) {
			addButton.disabled = true;
			inputValue.disabled = true;
			let message = document.getElementById('message');
			message.classList.remove('showNone');
		} else {
			addButton.disabled = false;
			inputValue.disabled = false;
			let message = document.getElementById('message');
			message.classList.add('showNone');
		}
	}
}

function delItem (parent) {
	parent.parentNode.parentNode.removeChild(parent.parentNode);
	counter--;
	if (counter < maxList) {
		addButton.disabled = false;
		inputValue.disabled = false;
		let message = document.getElementById('message');
		message.classList.add('showNone');
	} else {
		addButton.disabled = true;
		inputValue.disabled = true;
	}
}

function doneItem (el) {
	el.innerHTML = 'check_box';
}

function allowDrop(ev) {
  ev.preventDefault();
}

function dragStar(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function dragOver(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}