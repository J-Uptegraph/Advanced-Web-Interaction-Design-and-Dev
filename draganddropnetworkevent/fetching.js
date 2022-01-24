/*
Generic wrapper function for fetch()

Revise this file as necessary, then either paste the code
into your <script> or include via a unique <script> element.

The function is called fetchGet() here.  It calls a second 
function here called writeIt().

fetchGet() takes two arguments: 

  - url (the file being requested)
  - element (the final HTML resting place of the received file contents)

fetchGet() passes two arguments to writeIt():

  - data (the contents of the file recieved from the network
  - element (the final HTML resting place of the received file contents)

You can use these functions as they are written or as the basis for your
own code.

The 'text' part of 'response.text' means that the data received is text,
i.e., a string and not an object or other item.  The 'text' can contain 
HTML code--it's not restricted to plain 'text' but can include anything
that might be in a string.

*** Remember, network requests in JavaScript only work 
*** when they go through a server.
*/

function fetchGet(url,element) {
  fetch(url)
  .then(response => response.text())
  .then(data => writeIt(data,element))
  .catch(err => console.error(err));
}

function writeIt(data,element) {
  element.innerHTML = data;
// or use element.innerText if you want to write text without HTML
}

