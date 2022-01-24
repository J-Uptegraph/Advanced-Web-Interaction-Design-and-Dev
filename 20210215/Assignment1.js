formLoop();

function formLoop() {

    let inputTypeArray = ["text", "text", "text", "text", "text", "text", "number", "password", "password"];
    let inputLabels = ["First Name: ", "Last Name: ", "Street Address: ", "Apartment Number: ", "City: ", "State/Province/Region: ", "Zip Code: ", "Enter Password: ", "Re-enter Password: "];
    
    for (let i = 0; i !== 9; i++) {
        // document.getElementById("uptegrjwform").append("<label for=\"" + inputLabels[i] + "\">" + inputLabels[i] + "</label");
        // document.getElementById("uptegrjwform").append("<input type=\"" + inputTypeArray[i] + "\" id=\"" + inputLabels[i] + "\">");

        let input = document.createElement("input");
        input.setAttribute("type", inputTypeArray[i]);
        input.setAttribute("id", inputLabels[i]);

        let label = document.createElement("label");
        label.htmlFor = inputLabels[i];
        label.innerHTML = inputLabels[i];

        let linebreak = document.createElement("br");

        document.getElementById("uptegrjwform").appendChild(label);
        document.getElementById("uptegrjwform").appendChild(input);
        document.getElementById("uptegrjwform").appendChild(linebreak);

    }
}

// let el = document.createElement("input");
// el.className = "integr_elements";
// el.placeholder = "name";
// el.id = "name";

// let form = document.getElementById("my-form");
// form.appendChild(el);