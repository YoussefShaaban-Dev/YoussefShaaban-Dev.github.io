const welcomeMessage = "Welcome to my website!";
const myName = "I'm Youssef Shaaban";
const myProfession = "I'm a Full Stack Developer";
const mySpeciality = "I specialized in web development using .NET technologies and Angular.";
const myExperience = "I have over 5 years of experience in web development.";
const messages = [welcomeMessage, myName, myProfession, mySpeciality, myExperience];
var currentMessageIndex = 0;
var welcomeElement,cursor;

window.onload = function () {
    welcomeElement = document.getElementById("welcome");
    if (!welcomeElement)
        return;

    cursor = document.getElementById("cursor");
    setInterval(function () {
        if (cursor)
            cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
    }, 400);

    writeMessage(welcomeMessage);
}

function writeMessage() {
    if (!welcomeElement)
        return;

    let message = messages[currentMessageIndex]

    if (welcomeElement.innerHTML.length < message.length) {
        welcomeElement.innerHTML += message[welcomeElement.innerHTML.length];
        setTimeout(writeMessage, 120);
    }
    else {
        setTimeout(removeMessage, 5000);
    }
}

function removeMessage() {
    if (welcomeElement.innerHTML.length > 0) {
        welcomeElement.innerHTML = welcomeElement.innerHTML.slice(0, -1);
        setTimeout(removeMessage, 100);
    }
    else {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        setTimeout(writeMessage, 2000);
    }
}

