// Cookies before anyting
let cookies = localStorage.getItem('profile');
let localUserProfile;

// COMMENT HERE MISSING

if (cookies === null || cookies === undefined) {
    let u_name = prompt('Enter your name');
    let u_nick = prompt('Enter your username');
    localUserProfile = {
        username: u_nick,
        author: u_name
    }
    localStorage.setItem('profile',JSON.stringify(localUserProfile));
} else {
    localUserProfile = JSON.parse(cookies);
}



const form = document.querySelector('.inputMessage');
const button = document.querySelector('.sendButton');
const backbone = new Backbone('gaming');
const ui = new UI(localUserProfile.username);
let UIMessages = document.querySelector('.chat-messages');
const topics = document.querySelector('.chats-room');
let unsub;

let whichRoom = 'gaming';
let input;
let message;



// This event listener only listen on SEND button
button.addEventListener('click', (e) => {
   input = form.value.trim();
   if(input.length === 0 ||input === undefined || input === null){

   }else {
       message = {
           message: input,
           author: localUserProfile.author,
           username: localUserProfile.username,
           room: whichRoom
       }
      
       backbone.sendMessage(message);
       form.value = '';
   }
   
});

// This event listener listen only if user enter message end then press enter
form.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        input = form.value.trim();
       
        if (input.length === 0 || input === undefined || input === null) {
           
        } else {
            
            	 message = {
            	     message: input,
            	     author: localUserProfile.author,
            	     username: localUserProfile.username,
            	     room: whichRoom
            	 }
            	 backbone.sendMessage(message);
         
            	 form.value = '';
        }
    }
})


// here we are going to listen which topic will user choose
topics.addEventListener('click', (e) => {
    let prvRoomId = '';
    prvRoomId = whichRoom;
    document.querySelector(`#${prvRoomId}`).setAttribute('class', 'room');

    whichRoom = e.target.parentElement.id;
    e.target.parentElement.setAttribute('class', 'room active');
    UIMessages.innerHTML = '';
    unsub();
    displayIt();

});


const displayIt = () => {
    UIMessages.innerHTML = '';
    backbone.getMessages((data, id) => {
        ui.displayMessages(data, id).then(e => {
           
        })
    });
}

displayIt()