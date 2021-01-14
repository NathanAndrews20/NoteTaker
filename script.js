let listLength = 0;

document.getElementById('save-button').addEventListener('click', (event) => {

    const list = document.getElementById("note-list");
    
    let listItem = document.createElement('li');
    listItem.id = 'li'+listLength;
    
    //Creating noteDiv
    let noteText = document.getElementById('textarea').value;
    let noteDiv = document.createElement('div');
    noteDiv.className = 'noteDiv';
    noteDiv.innerHTML = noteText;

    //Creating dateDiv
    let dateDiv = document.createElement('div');
    dateDiv.className = 'date-div';
    let date = new Date;
    let dateString = date.toDateString();
    dateDiv.innerHTML = dateString;
    
    //Creating completedDiv
    let completedDiv = document.createElement('div');
    completedDiv.className = 'completed-div';
    let completedButton = document.createElement('button');
    completedButton.innerHTML = 'Mark Complete';
    completedDiv.append(completedButton);

    //Creating deleteDiv
    let deleteDiv = document.createElement('div');
    deleteDiv.className = 'delete-div';
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteDiv.append(deleteButton);
    
    //Appending Items
    listItem.append(noteDiv,dateDiv,completedDiv,deleteDiv);
    list.append(listItem);
});

document.getElementById