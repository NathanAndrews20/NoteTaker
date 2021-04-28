import LinkedList from "./LinkedList.js";

const listItemLinkedList = new LinkedList();

loadListItemsFromStorage();
renderList();

document.getElementById('add-button').addEventListener('click', () => {
    
    if(document.getElementById('textarea').value === '') { return; }

    const dateObject = new Date();
    const dateString = dateObject.toDateString();
    const noteString = document.getElementById('textarea').value;

    const listItem = createListItem(dateString,noteString);
    listItemLinkedList.add(listItem);
    renderList();

    const listItemData = {date: dateString, note: noteString};
    localStorage.setItem(`${getIndex(listItem)}`,JSON.stringify(listItemData));
});

document.getElementById('list').addEventListener('click', event => {
    const selection = event.target;
    if(selection.className === 'delete-button'){
        const index = parseInt(selection.getAttribute('index'));
        localStorage.removeItem(index);
        listItemLinkedList.remove(index);
        resetIndicies();
        renderList();
    }
});

function createListItem(dateString, noteString){
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.setAttribute('index',`${listItemLinkedList.size()}`)
    
    const notePElement = document.createElement('p');
    notePElement.className = 'note';
    notePElement.innerHTML = noteString;

    const datePElement = document.createElement('p');
    datePElement.className = 'date';
    datePElement.innerHTML = dateString;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.setAttribute('index',`${listItemLinkedList.size()}`);
    deleteButton.innerHTML = 'Delete';

    const deleteButtonDiv = document.createElement('div');
    deleteButtonDiv.className = 'delete-button-container';
    deleteButtonDiv.append(deleteButton);
    
    listItem.append(datePElement,notePElement,deleteButtonDiv);
    listItem.id = 'list-item';
    
    return listItem;
}

function getIndex(listItem){
    return listItem.getAttribute('index');
}

function getDate(listItem){
    return listItem.children[0].innerText;
}

function getNote(listItem){
    return listItem.children[1].innerText;
}

function loadListItemsFromStorage(){
    const numNoteStores = localStorage.length;
    if(numNoteStores === 0) { return; }

    for(let index = 0; index<numNoteStores; index++){
        const listItemData = JSON.parse(localStorage.getItem(index));
        const dateString = listItemData.date;
        const noteString = listItemData.note;
        
        const listItem = createListItem(dateString,noteString);
        listItemLinkedList.add(listItem);
    }
}

function renderList(){
    const listDomElement = document.getElementById('list');
    
    removeAllChildNodes(listDomElement);

    listItemLinkedList.forEach(elem =>{
        listDomElement.append(elem);
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetIndicies(){
    localStorage.clear();

    let index = 0;
    
    listItemLinkedList.forEach(listItem =>{
        listItem.setAttribute('index',`${index}`);
        listItem.children[2].children[0].setAttribute('index',`${index}`);
        const listItemData = `${getDate(listItem)},${getNote(listItem)}`;
        localStorage.setItem(index,listItemData);
        index++;
    });
}