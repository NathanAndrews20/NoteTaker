import LinkedList from "./LinkedList.js";

const noteList = new LinkedList();

document.getElementById('save-button').addEventListener('click', (event) => {
    
    if(document.getElementById('textarea').value === '') { return; }

    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.setAttribute('index',`${noteList.size()}`)
    
    //Creating noteDiv
    const noteText = document.getElementById('textarea').value;
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note-div';
    noteDiv.innerHTML = noteText;

    //Creating dateDiv
    const dateDiv = document.createElement('div');
    dateDiv.className = 'date-div';
    const date = new Date;
    const dateString = date.toDateString();
    dateDiv.innerHTML = dateString;
    
    //Creating completedDiv
    const completedDiv = document.createElement('div');
    completedDiv.className = 'completed-div';
    const completedButton = document.createElement('button');
    completedButton.className = 'completed-button';
    completedButton.setAttribute('index',`${noteList.size()}`);
    completedButton.innerHTML = 'Complete';
    completedDiv.append(completedButton);

    //Creating deleteDiv
    const deleteDiv = document.createElement('div');
    deleteDiv.className = 'delete-div';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.setAttribute('index',`${noteList.size()}`);
    deleteButton.innerHTML = 'Delete';
    deleteDiv.append(deleteButton);

    //Creating buttonContianerDiv
    const buttonContainerDiv = document.createElement('div');
    buttonContainerDiv.className = 'button-container';
    buttonContainerDiv.append(completedDiv,deleteDiv);
    
    //Appending Items
    listItem.append(dateDiv,noteDiv,buttonContainerDiv);
    listItem.id = 'list-item';
    noteList.add(listItem);
    renderList();
});

function renderList(){
    const listDomElement = document.getElementById('note-list');
    
    removeAllChildNodes(listDomElement);

    noteList.forEach(elem =>{
        listDomElement.append(elem);
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById('note-list').addEventListener('click', event => {
    const selection = event.target;
    if(selection.className === 'delete-button'){
        const index = parseInt(selection.getAttribute('index'));
        noteList.remove(index);
        resetIndicies();
        renderList();
    }
});

function resetIndicies(){
    const listDomElement = document.getElementById('note-list');

    let index = 0;
    
    noteList.forEach(elem =>{
        elem.setAttribute('index',`${index}`);
        console.log(elem.children[2].children);
        elem.children[2].children[0].children[0].setAttribute('index',`${index}`);
        elem.children[2].children[1].children[0].setAttribute('index',`${index}`);
        index++;
        listDomElement.append(elem);
    });
}