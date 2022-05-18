import myProjects from "./index";

function storeProjects() {
    let localProjects = [];
    myProjects.forEach(project => {
        localProjects.push(project);
    });
    localStorage.setItem("storedProjects", JSON.stringify(localProjects));
}

export default storeProjects;