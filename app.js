// Form reference
const form = {}
form.noteText = document.querySelector('#formNoteText');
form.addButton = document.querySelector('#addNote');
form.color = document.querySelector('#formColor');

const notes = document.querySelector('#noteList');

form.noteText.focus();

// Functions
function addNote() {
  let text = form.noteText.value;
  let note = document.createElement('div');
  let deleteButton = document.createElement('span');

  note.classList.add('note');
  note.classList.add(form.color.value);
  note.innerHTML = `<div class='note-text'>${text}</div>`;
  note.addEventListener('click', function(e) {
    e.preventDefault(); 
    editNote(e);
  });
  
  deleteButton.classList.add('note-delete');
  deleteButton.innerHTML = '&times;';

  note.appendChild(deleteButton);  
  notes.appendChild(note);

  form.noteText.value = '';
  form.noteText.focus();

  addListenerDeleteButton(deleteButton);
}

function addListenerDeleteButton(deleteButton) {
  deleteButton.addEventListener('click', function (e) {
    e.stopPropagation();      
    deleteNote(e);
  });
}

function deleteNote(e) {
  let eventNote = e.target.parentNode;
  eventNote.parentNode.removeChild(eventNote);
}

function editNote(e) {

  // in progress
  form.noteText.innerHTML = `<div class='note-text'>${e.target.innerHTML}</div>`;
}

// Event Listeners
form.addButton.addEventListener('click', function (e) {
  e.preventDefault();  
  if (form.noteText.value != '') {
    addNote();
  }
});

