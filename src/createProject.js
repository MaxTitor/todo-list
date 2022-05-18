class Project {
    constructor(name){
        this.name = name;
        this.list = [];
    }
}

function newProject(name) {
    let project = new Project(name);
    return project;
}

export default newProject;