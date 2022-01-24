
const div1 = document.querySelector(".divvy");

let shiftValid = null;

let arrNums = ['16', '56', '187', '189'];

let storage = '';
// Function writes the storage to the console

let modifier = '';

let Num1 = '';
// First Number

let Num2 = '';
// Second Number

let output = '';
// Outpu

function writeStore() {
    console.log(storage.innerText);
}

function checkOurModifier() {
    if (event.key === '+') {
        modifier = event.key;
    }

    if (event.key === '-') {
        modifier = event.key;
    }

    if (event.key === '*') {
        modifier = event.key;
    }
    if (event.key === '/') {
        modifier = event.key;
    }
    console.log(modifier);
}

function checkAddition() {
    document.addEventListener("keyup", function (event) {
        if (event.which === 16) {
            shiftValid = true;
        }

        if (event.which === 187 && shiftValid === true) {
                storage = "+";
                console.log(storage);
                shiftValid = false;
                storage = '';
        }
        
        if (event.which === 56 && shiftValid === true) {
            storage = "*";
            console.log(storage);
            shiftValid = false;
        }
    });
}



document.addEventListener("click", function (event) {
    if (event.target.nodeName === 'BUTTON') {
        // event.target.innerText "Reads the button number"
        console.log(event.target.innerText);
        storage = event.target.innerText;
    }
});


// document.addEventListener("", function (event) {
//         if (event.target.nodeName === 'BUTTON') {
//             // event.target.innerText "Reads the button number"
//             console.log(event.target.innerText);
//             storage = event.target.innerText;
//         }
//     });

document.addEventListener("keyup", function (event) {
    // Checks if you click a number key at the top on the keyboard
    if ((event.which > 47 && event.which < 58) && (shiftValid === false || shiftValid === null)) {
        // console.log(event.which - 48);
        Num1 = event.which - 48;
        console.log(Num1);
    }
    });

    // if (event.which > 0 && event.which < 1000) {
    //     // console.log(event.which);  
    //     // console.log(storage);
    // }
    // if (event.key === 189) {
    //     storage = '-';
    //     console.log(storage);
    // }
    // if (event.which === 8) {
    //     storage = 'Delete/Clear';
    //     console.log(storage);
    // }
    // if (event.which === 191) {
    //     // console.log(event.which);
    //     storage = "/";
    //     console.log(storage);
    // }
    // if (event.which === 187 && shiftValid !== true) {
    //     storage = '=';
    //     console.log(storage);
    //     storage = '';
    // }

    checkAddition();
    