import myProjects from "./index";

function updateHtml() {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";

    myProjects.forEach(project => {
        let option = document.createElement("option");
        option.value = project.name;
        let optionInnerText = document.createTextNode(project.name);
        option.appendChild(optionInnerText);
        projectList.appendChild(option);
    });
}

export default updateHtml;