const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

let setStorage=()=>{
    localStorage.setItem("notes", notesContainer.innerHTML)
}
letshowNotes=()=>{
    notesContainer.innerHTML = localStorage.getItem("notes");
}
letshowNotes();
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true");
    img.src = "src/file.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        setStorage();
    }
    else if(e.target.tagName==="P"){
        let notes = document.querySelectorAll(".input-box")
        notes.forEach(element => {
            element.onkeyup = ()=>{
                setStorage();
            }
        })
    }
})
document.addEventListener("keydown", event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})