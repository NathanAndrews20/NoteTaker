document.getElementById('save-button').addEventListener('click', (event) => {

    const list = document.getElementById("note-list");
    
    let listItem = document.createElement('li');
    
    let noteText = document.getElementById('textarea').value;
    let noteDiv = document.createElement('div');
    noteDiv.id = 'noteDiv';
    noteDiv.innerHTML = noteText;

    let dateDiv = document.createElement('div');
    dateDiv.id = 'date-div';
    let date = new Date;
    let dateString = date.toDateString();
    dateDiv.innerHTML = dateString;
    
    listItem.append(noteDiv,dateDiv);

    list.append(listItem);
});