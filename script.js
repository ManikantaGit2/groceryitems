let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery Lists";
bgContainerEl.appendChild(headingEl);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);


let groceryItems =["Milk","Chocolates","Fruits","vegetables","Bread"];

for(let groceryItem of groceryItems) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent =groceryItem;
    listContainerEl.appendChild(listItemEl);
    
}

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = "deliveryMode";
checkboxEl.classList.add("check");
bgContainerEl.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for","deliveryMode");
labelEl.classList.add("delivery-text");
labelEl.textContent = "Need Home Delivery";
bgContainerEl.appendChild(labelEl);

let brEl = document.createElement("br");
bgContainerEl.appendChild(brEl);

let btnEl = document.createElement("button");
btnEl.classList.add("button");
btnEl.textContent = "Proceed to Pay";
bgContainerEl.appendChild(btnEl);

