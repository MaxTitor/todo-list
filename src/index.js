import "./styles/main.scss";
import addProject from "./addProject";
import addItem from "./addItem";
import selectProject from "./selectProject";
import deleteProject from "./deleteProject";
import storeProjects from "./storeProjects";
import restoreProjects from "./restoreProjects";
import updateListHtml from "./updateListHtml";

let myProjects = [];

const newProjectBtn = document.getElementById("new-project");
newProjectBtn.addEventListener("click", () => {
    addProject();
    storeProjects();
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

function restore() {
    let restoredProjects = restoreProjects();
    myProjects = restoredProjects;

    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";
    
    myProjects.forEach(project => {
        let option = document.createElement("option");
        option.value = project.name;
        let optionInnerText = document.createTextNode(project.name);
        option.appendChild(optionInnerText);
        projectList.appendChild(option);
    });

    const selectedProject = document.getElementById("project-list").value;
    myProjects.forEach(project => {
        if (project.name === selectedProject) {
            updateListHtml(project.list);
        }
    });
}

restore();

export default myProjects;