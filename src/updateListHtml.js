function updateHtml(projectList) {
    document.getElementById("list").innerHTML = "";
    let orderedList = document.getElementById("list");

    projectList.forEach(Item => {
        let listItem = document.createElement("li");
        listItem.className = "listitem";

        //Name
        let nameH2 = document.createElement("H2");
        let name = document.createTextNode(Item.name);
        nameH2.appendChild(name);
        listItem.appendChild(nameH2);
        if (Item.check === true) {
            nameH2.classList.add("check");
        }

        //Description
        let descriptionH3 = document.createElement("H3");
        let description = document.createTextNode(Item.desc);
        descriptionH3.appendChild(description);
        listItem.appendChild(descriptionH3);

        //Date
        let dateH4 = document.createElement("H4");
        let date = document.createTextNode("Due: " + Item.date);
        dateH4.appendChild(date);
        listItem.appendChild(dateH4);

        //Priority
        let priorityH4 = document.createElement("H4");
        let priority = document.createTextNode("Priority: " + Item.priority);
        priorityH4.appendChild(priority);
        listItem.appendChild(priorityH4);

        //Check
        let checkBtn = document.createElement("button");
        let checkBtnText = document.createTextNode("Check");
        checkBtn.appendChild(checkBtnText);
        checkBtn.addEventListener("click", () => {
            if (Item.check === false) {
                Item.check = true;
                nameH2.classList.add("check");
            } else {
                Item.check = false;
                nameH2.classList.remove("check");
            }
        });
        listItem.appendChild(checkBtn);

        //Delete
        let deleteBtn = document.createElement("button");
        let deleteBtnText = document.createTextNode("Delete");
        deleteBtn.appendChild(deleteBtnText);

        deleteBtn.addEventListener("click", () => {
            listItem.remove();
            const thisItem = Item;
            const thisItemIndex = projectList.indexOf(thisItem);
            projectList.splice(thisItemIndex, thisItemIndex + 1);
        });
        listItem.appendChild(deleteBtn);

        orderedList.appendChild(listItem);
    })
}

export default updateHtml;