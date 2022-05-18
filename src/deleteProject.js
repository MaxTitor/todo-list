import myProjects from "./index";
import updateHtml from "./updateProjectsHtml";
import storeProjects from "./storeProjects";

function deleteProject() {
    const selectedProject = document.getElementById("project-list").value;
    let selectedProjectIndex = 0;
    myProjects.forEach((project, i) => {
        if (project.name === selectedProject) {
            selectedProjectIndex = i;
        }
    });

    myProjects.splice(selectedProjectIndex, selectedProjectIndex + 1);
    storeProjects();
    updateHtml();
}

export default deleteProject;