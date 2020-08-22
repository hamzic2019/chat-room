// Cookies before anyting
let cookies = localStorage.getItem('profile');
let localUserProfile;

if (cookies === null || cookies === undefined) {
    let u_name = prompt('Enter your name');
    let u_nick = prompt('Enter your username');
    localUserProfile = {
        username: u_nick,
        author: u_name
    }
} else {
    localUserProfile = cookies;
}




const form = document.querySelector('.inputMessage');
const button = document.querySelector('.sendButton');
const backbone = new Backbone('chats');
const ui = new UI(localUserProfile.username);
const UIMessages = document.querySelector('.chat-messages');

let input;
let message;

button.addEventListener('click', (e) => {
   input = form.value.trim();
   message = {
       message: input,
       author: localUserProfile.author,
       username: localUserProfile.username
   }
   backbone.sendMessage(message);
   form.value = '';
});

form.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        input = form.value.trim();
        message = {
            message: input,
            author: localUserProfile.author,
            username: localUserProfile.username
        }
        backbone.sendMessage(message);
        form.value = '';
    }
})



backbone.getMessages((data, id) => {
    ui.displayMessages(data, id);
});

