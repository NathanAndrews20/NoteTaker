document.getElementById('save-button').addEventListener('click', (event) => {

    let noteText = document.getElementById('textarea').value;
    const list = document.getElementById("note-list");
    let listItem = document.createElement('li');
    
    listItem.textContent = noteText;
    list.append(listItem);
});