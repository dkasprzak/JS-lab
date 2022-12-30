class NotePocket{
    constructor (title, content, color, pin, createdDate){
        this.title = title;
        this.content = content;
        this.color = color;
        this.pin = pin;
        this.createdDate = createdDate;
        this.notes = [];
    }

    addNote = () => {
        console.log("Dodawanie nowej notatki");
        const title = document.querySelector("#title").value;
        const content = document.querySelector("#content").value;
        const color = document.querySelector("#color").value;
        const pin = document.querySelector("#pin").checked;
        const createdDate = new Date();

        const newNote = new NotePocket(title, content, color, pin, createdDate);

        const notesArray = JSON.parse(localStorage.getItem('notes')) || [];
        notesArray.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notesArray));

        displayNotes();
    }
}

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
  new NotePocket().addNote();
});

function displayNotes(){
    const notesArray = JSON.parse(localStorage.getItem('notes')) || [];

    const notes = document.querySelector(".notes");
    notes.innerHTML = "";

    for(let i = 0; i < notesArray.length; i++){
        const note = notesArray[i];

        const noteDiv = document.createElement("div");
        noteDiv.className = "note";

        const noteTitle = document.createElement("h3");
        noteTitle.textContent = note.title;

        noteDiv.style.backgroundColor = note.color;

        const noteContent = document.createElement("p");
        noteContent.textContent = note.content;

        noteDiv.appendChild(noteTitle);
        noteDiv.appendChild(noteContent);
        notes.appendChild(noteDiv);
    }
}

displayNotes();