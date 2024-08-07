const itemInput = document.querySelector("#item-input");
const addButton = document.querySelector(".btn");

function addToList(e){
	e.preventDefault();
	const newEntry = itemInput.value;
	if (newEntry === "" || newEntry === null ) {
		alert("Please enter the name of a new item to acquire.");
	}
	else {
		createNewItem(newEntry);
		itemInput.value = "";
	}
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}


function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  document.querySelector('.items').appendChild(li);
}



addButton.addEventListener('click', addToList);
itemInput.addEventListener('submit', addToList);

