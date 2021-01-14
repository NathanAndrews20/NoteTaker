import LinkedList from "./LinkedList.js";

const noteList = new LinkedList();

document.getElementById('save-button').addEventListener('click', (event) => {
    
    const listItem = document.createElement('li');
    
    //Creating noteDiv
    const noteText = document.getElementById('textarea').value;
    const noteDiv = document.createElement('div');
    noteDiv.className = 'noteDiv';
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
    completedButton.innerHTML = 'Mark Complete';
    completedDiv.append(completedButton);

    //Creating deleteDiv
    const deleteDiv = document.createElement('div');
    deleteDiv.className = 'delete-div';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteDiv.append(deleteButton);
    
    //Appending Items
    listItem.append(noteDiv,dateDiv,completedDiv,deleteDiv);
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