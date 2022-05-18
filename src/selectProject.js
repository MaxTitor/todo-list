import updateHtml from "./updateListHtml";
import myProjects from "./index";

function selectProject() {
    const selectedProject = document.getElementById("project-list").value;
    myProjects.forEach(project => {
        if (project.name === selectedProject) {
            updateHtml(project.list);
        }
    });
}

export default selectProject;