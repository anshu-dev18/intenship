const input = document.getElementById("noteInput");
const btn = document.getElementById("postBtn");
const board = document.getElementById("board");

function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utter);
}

function addNote(text) {
  const div = document.createElement("div");
  div.className = "note";
  div.textContent = text;
  board.appendChild(div);
}

function saveNote(text) {
  const saved = JSON.parse(localStorage.getItem("notes")) || [];
  saved.push(text);
  localStorage.setItem("notes", JSON.stringify(saved));
}

btn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  addNote(text);
  speak(text);
  saveNote(text);
  input.value = "";
});

// Load saved notes
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("notes")) || [];
  saved.forEach(addNote);
};
