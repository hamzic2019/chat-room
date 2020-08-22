class UI {
    constructor(username){
        this.username = username
    }

    async displayMessages(data, id){
        let displayBlock;
        if(data.username === `${this.username}`){ // later we have to check localstoarage
            displayBlock = 
            `<div class = "chat-user-message active-profile" id="${id}">
                <p class="message-paragraph"> <span class="message">${data.message}</span></p>
                <p class="message-author"> Author: <span class="author"> ${data.author} </span></p>
            </div>`;
        }else {
            displayBlock = 
            `<div div class = "chat-user-message" id="${id}" >
                <p class="message-paragraph"> <span class="message">${data.message}</span></p>
                <p class="message-author"> Author: <span class="author"> ${data.author} </span></p>
             </div>`;
        }
        
        UIMessages.innerHTML += displayBlock;
    }

    async removeElement(elementId){
        const element = document.querySelector(`#${elementId}`);
        element.remove();
    }
}