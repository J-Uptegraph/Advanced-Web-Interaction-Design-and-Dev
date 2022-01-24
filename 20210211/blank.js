// get <div> with querySelector(), not getElementById()
let div1 = document.querySelector("div");

//create <p>s and append them to the <div>
for (let i = 0; i < 10; i++) {
  let elem = document.createElement("p");
  div1.appendChild(elem);
}

//collect the new <p> in the paras array-like object
let paras = document.querySelectorAll("p");

//loop through paras, write text to paras elements
for (let i = 0; i < paras.length; i++) {
  // paras[i].innerHTML = 'some text';
    if (i % 2){ // Odd Number
    paras[i].innerText = i + 'is ODD!';
    }
    else { // Even Number
    paras[i].innerText = i + 'is Even!';
    }
}
  