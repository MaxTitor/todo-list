import createProject from "./createProject";
import updateProjectsHtml from "./updateProjectsHtml";
import myProjects from "./index";

function addProject() {
    let projectName = document.getElementById("project").value;
    let project = createProject(projectName);
    myProjects.push(project);
    updateProjectsHtml();
    console.log(myProjects);
}

export default addProject