import "./styles/main.scss";
import addProject from "./addProject";
import addItem from "./addItem";
import selectProject from "./selectProject";
import deleteProject from "./deleteProject";

let myProjects = [];

const newProjectBtn = document.getElementById("new-project");
newProjectBtn.addEventListener("click", () => {
    addProject();
});

const addItemBtn = document.getElementById("add");
addItemBtn.addEventListener("click", () => {
    addItem();
});

const selectProjectBtn = document.getElementById("select-project");
selectProjectBtn.addEventListener("click", () => {
    selectProject();
});

const deleteProjectBtn = document.getElementById("delete-project");
deleteProjectBtn.addEventListener("click", () => {
    deleteProject();
});

export default myProjects;