class Item {
    constructor(name, desc, date, priority){
        this.name = name,
        this.desc = desc,
        this.date = date,
        this.priority = priority,
        this.check = false
    }
}

let itemName = window.document.getElementById("name");
let itemDesc = window.document.getElementById("desc");
let itemDate = window.document.getElementById("date");
let itemPriority = window.document.getElementById("priority");

function newItem() {
    let item = new Item(itemName.value, itemDesc.value, itemDate.value, itemPriority.value);
    return item;
}

export default newItem