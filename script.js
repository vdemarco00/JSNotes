const elements = {
    "sidebar_note_html": "<div class=\"sidebar-note\">\n  <div class=\"sidebar-note-btn\">\n    <h2>Empty note</h2>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" fill=\"#ACBFC3\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\n      <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/>\n      <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708\"/>\n    </svg>\n  </div>\n  <div class=\"sidebar-note-close-btn\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" fill=\"red\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\n      <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16\"/>\n      <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708\"/>\n    </svg>\n  </div>\n</div>"
};


function createNewNote() {
    const sidebarContent = document.getElementById("sidebar-content");
    const parser = new DOMParser();
    const doc = parser.parseFromString(elements.sidebar_note_html, "text/html");
    const newSidebarNote = doc.body.firstChild;
    sidebarContent.appendChild(newSidebarNote);
}

function editNote() {

}