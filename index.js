function randomInteger(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function makeContactrName(contactName) {
    const contact = document.createElement("p");
    contact.textContent = contactName;
    return contact;
}

function makeContact() {
    const contacts = ["Tigran Khachatryan", "Anna Mirzoyan", "Anush Girgoryan", "Arman Isajanyan"];
    const heading = document.getElementById("chat-heading");
    const contactName = contacts[randomInteger(0, 3)];
    const contact = makeContactrName(contactName);
    heading.append(contact);
}

function createMessage(value) {
    const message = document.createElement("p");
    message.textContent = value;
    return message;
}

function reply() {
    const replies = ["Hello", "Yes", "No", "Welcome", "Ok"];
    const reply = replies[randomInteger(0, 4)];
    return createMessage(reply);
}

function sendChat() {
    const inputValue = document.getElementById("chat-input").value;
    const chat = document.getElementById("chat-box");
    const newMessage = createMessage(inputValue);
    newMessage.classList.add("message");
    newMessage.classList.add("sent-message");
    chat.append(newMessage)
    document.getElementById("chat-input").value = "";
    const newReply = reply();
    newReply.classList.add("reply");
    newReply.classList.add("message");
    newReply.style.textAlign = "left";
    chat.scrollTop = chat.scrollHeight;
    setTimeout(()=> {chat.append(newReply);
        chat.scrollTop = chat.scrollHeight;}, 1000);
}

makeContact();






