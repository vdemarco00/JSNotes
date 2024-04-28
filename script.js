const textarea = document.getElementById("note-container");
const elements = {
  "sidebar_note_html": "<div class=\"sidebar-note-btn\" id=\"sidebar-note-btn\" onclick=\"onNoteButtonPress(event)\">\n    <h2>Empty note</h2>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" fill=\"#ACBFC3\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\n      <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/>\n      <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708\"/>\n    </svg>\n  </div>\n  <div class=\"sidebar-note-close-btn\" onclick=\"onNoteDeleteButtonPress(event)\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" fill=\"red\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\n      <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/>\n      <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708\"/>\n    </svg>\n  </div>"
};
const noteIDPrefix = "note";
let currentIndex = 0;
let openNoteID = "";
let notesList = {};

const waitTime = 2000;
let timeoutId = null;

textarea.addEventListener("keyup", () => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    console.log("User stopped typing!");
    saveNote();
  }, waitTime);
});

function createNewNote() {
  const sidebarContent = document.getElementById("sidebar-content");
  const newNoteID = noteIDPrefix + currentIndex;
  notesList[newNoteID] = "";
  const newSidebarNote = document.createElement("div");
  newSidebarNote.innerHTML = elements.sidebar_note_html;
  newSidebarNote.className = "sidebar-note";
  newSidebarNote.id = newNoteID;
  sidebarContent.appendChild(newSidebarNote);
  currentIndex++;
}

function loadNote() {

}

function saveNote() {
  notesList[openNoteID] = textarea.value;
  const sidebarButton = document.getElementById(openNoteID).children[0].children[0];
  if (textarea.value.length >= 65) {
    sidebarButton.innerText = textarea.value.slice(0, 61) + "...";
  }
  else {
    sidebarButton.innerText = textarea.value;
  }
}

function deleteNote(noteID) {
  console.log("Delete note " + noteID);
  document.getElementById(noteID).remove();
  delete notesList[noteID];
}

function openNote(noteID) {
  textarea.value = notesList[noteID];
  openNoteID = noteID;
}

function onNoteButtonPress(event) {
  openNoteID = event.target.parentElement.id;
  openNote(openNoteID);
}

function onNoteDeleteButtonPress(event) {
  parentNoteID = event.target.parentElement.id;
  deleteNote(parentNoteID);
}

function onWindowLoaded() {
  createNewNote();
  openNote("note0");
}