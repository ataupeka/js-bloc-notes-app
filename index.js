const noteListDiv = document.querySelector('.note-list');

let noteID = 1;
function note(id, title, content){
    this.id = id;
    this.title = title;
    this.content = content;
}

function eventListeners(){
    document.addEventListener('DOMContentLoaded', displayNotes);
    document.getElementById('add-note-btn').addEventListener('click', addNewNote);
    noteListDiv.addEventListener('click', deleteNoteItem);
 
    document.getElementById('delete-all-btn').addEventListener('click', deleteAllNotes);
}

eventListeners();



//get items form storage
function getDataFromStorage(){
    return localStorage.getItem('notes') ? JSON.parse (localStorage.getItem('notes')) : [];
}




//add a new note in the list 
function addNewNote(){
    const noteTitle = document.getElementById('note-title');
    const noteContent = document.getElementById('note-content');

   if(validateInput(noteTitle, noteContent)){
    let notes = getDataFromStorage();
    let noteItem = new note (noteID, noteTitle.value, noteContent.value);
    noteID++;
    notes.push(noteItem);
    createNote(noteItem);

    //saving in the local storage

    localStorage.setItem('notes', JSON.stringify(notes));

    noteTitle.value = "";
    noteContent.value = "";


   }


}

function validateInput(title, content){
    if(title.value != "" && content.value != ""){
        return true;
    } else {
        if(title.value === "") title.classList.add('warning');
        if(content.value === "") content.classList.add('warning');
    }

    setTimeout(() =>{
        title.classList.remove('warning');
        content.classList.remove('warning');
    }, 500);

}
