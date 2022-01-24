document.addEventListener('DOMContentLoaded', function () {
    let button1 = document.createElement('button');
    button1.id = 'AcceptButton';
    button1.className = 'AcceptButton';
    button1.innerHTML = 'Accept';
    button1.addEventListener("click", createCookie);

    let button2 = document.createElement('button');
    button2.id = 'DeclineButton';
    button2.className = 'DeclineButton';
    button2.innerHTML = 'Decline';
    button2.addEventListener("click", destroyShield);
 

    let div = document.createElement('div');
    div.id = 'Shield';
    div.innerHTML = 'CookieShield Would Like To Use Cookies:';
    div.className = 'Shield';
    document.body.appendChild(div);
    div.appendChild(button1);
    div.appendChild(button2);
}, false);



function destroyShield() {
    if (document.getElementById('Shield').className='Shield') {
        document.getElementById('Shield').className='hiddenShield';
        console.log('Cookies have been declined!');
    }
}

function createCookie(){
    document.cookie = "who=JoeBurger; expires=Sat, 01 Jan 2022 12:00:00 UTC; path=/"
    console.log('Cookies have been accepted!');
    console.log('Cookie accepted by : ' + document.cookie);
    document.getElementById('Shield').className = 'hiddenShield';
}

