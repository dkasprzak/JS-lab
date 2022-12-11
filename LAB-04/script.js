const addButton = document.querySelector("#add");
const notes = document.querySelector(".notes");

function addNote(){
    const newNote = document.createElement("div");
    newNote.classList.add("addedNote");
    const title = document.createElement("input");
    const content = document.createElement("textarea");
    const editButton = document.createElement("button"); 
    editButton.innerHTML = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    newNote.appendChild(title);
    newNote.appendChild(content);
    newNote.appendChild(editButton);
    newNote.appendChild(deleteButton);
    notes.appendChild(newNote);
}
addButton.addEventListener('click', addNote);