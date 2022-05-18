import createProject from "./createProject";

function restoreProjects() {
    let localProjects = JSON.parse(localStorage.getItem("storedProjects"));
    let restoredProjects = [];
    localProjects.forEach(project => {
        let restoredProject = createProject(project.name);
        restoredProject.list = project.list;
        restoredProjects.push(restoredProject);
    });
    return restoredProjects;
}

export default restoreProjects;