const nameField= document.getElementById('name')
const emailField= document.getElementById('email')
const messageField= document.getElementById('message')
const submitBtn= document.getElementById('submit')
const messages= [];

function validateEmail(emailValidate) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValidate).toLowerCase());
}


submitBtn.addEventListener('click', function () {
    let nameValidate = nameField.value;
    let emailValidate = emailField.value;
    let messageValidate = messageField.value;

    if (!validateEmail(emailValidate)) {
        emailField.style.borderColor = "red";
        alert("Email is not valid");
    } else {
        console.log("Email is valid");
        emailField.style.borderColor = "black";

    }
    if (nameValidate === ''|| nameValidate.length < 2) {
        nameField.style.borderColor = "red";
        alert("name is too short");
        return;
    } else {
        console.log("name is valid");
        emailField.style.borderColor = "black";
    }
    if (messageValidate === " "|| messageValidate.length <= 1) {
        messageField.style.borderColor = "red";
        alert("message is too short");
        return;
    } else {
        console.log("message is valid");
        emailField.style.borderColor = "black";
    }

    // add new user to messages array
    messageSent(nameValidate,emailValidate,messageValidate);
    nameField.value= '';
    emailField.value= '';
    messageField.value= '';
})
function messageSent(nameValidate,emailValidate,messageValidate){
    const newMessage = {
        name: nameValidate,
        email: emailValidate,
        message: messageValidate
    }
  
    messages.push(newMessage);
    console.log(messages)
    alert("Message sent Successful");
}