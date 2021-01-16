import LinkedList from "./LinkedList.js";

const liLinkedList = new LinkedList();

document.getElementById('add-button').addEventListener('click', (event) => {
    
    if(document.getElementById('textarea').value === '') { return; }

    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.setAttribute('index',`${liLinkedList.size()}`)
    
    const noteText = document.getElementById('textarea').value;
    const notePElement = document.createElement('p');
    notePElement.className = 'note';
    notePElement.innerHTML = noteText;

    const datePElement = document.createElement('p');
    datePElement.className = 'date';
    const dateObject = new Date;
    const dateString = dateObject.toDateString();
    datePElement.innerHTML = dateString;
  
    const completeButton = document.createElement('button');
    completeButton.className = 'complete-button action-button';
    completeButton.setAttribute('index',`${liLinkedList.size()}`);
    completeButton.innerHTML = 'Complete';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button action-button';
    deleteButton.setAttribute('index',`${liLinkedList.size()}`);
    deleteButton.innerHTML = 'Delete';

    const actionButtonsContainerDiv = document.createElement('div');
    actionButtonsContainerDiv.className = 'action-buttons-container';
    actionButtonsContainerDiv.append(completeButton,deleteButton);
    
    listItem.append(datePElement,notePElement,actionButtonsContainerDiv);
    listItem.id = 'list-item';
    liLinkedList.add(listItem);
    renderList();
});

document.getElementById('list').addEventListener('click', event => {
    const selection = event.target;
    if(selection.className === 'delete-button'){
        const index = parseInt(selection.getAttribute('index'));
        liLinkedList.remove(index);
        resetIndicies();
        renderList();
    }
});

function renderList(){
    const listDomElement = document.getElementById('list');
    
    removeAllChildNodes(listDomElement);

    liLinkedList.forEach(elem =>{
        listDomElement.append(elem);
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetIndicies(){
    const listDomElement = document.getElementById('list');

    let index = 0;
    
    liLinkedList.forEach(elem =>{
        elem.setAttribute('index',`${index}`);
        elem.children[2].children[0].setAttribute('index',`${index}`);
        elem.children[2].children[1].setAttribute('index',`${index}`);
        index++;
        listDomElement.append(elem);
    });
}