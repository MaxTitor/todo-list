import createItem from "./createItem";
import myProjects from "./index";
import updateListHtml from "./updateListHtml";

function addItem() {
    let item = createItem();
    myProjects.forEach(project => {
        let selectedProject = document.getElementById("project-list").value;
        if (project.name === selectedProject) {
            project.list.push(item);
            updateListHtml(project.list);
            console.log(myProjects);
        }
    })
}

export default addItem;