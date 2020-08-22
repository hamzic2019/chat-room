const form = document.querySelector('.inputMessage');
const button = document.querySelector('.sendButton');
const backbone = new Backbone('chats');
let message;

button.addEventListener('click', (e) => {
    message = form.value.trim();
    console.log(message);
});

form.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        message = form.value.trim();
        console.log(message);
    }
})



backbone.getMessages((data) => {
    console.log(data);
});