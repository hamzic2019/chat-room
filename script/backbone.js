class Backbone {
    constructor(room){
        this.database = db.collection('chats')
    }

    async getMessages(callback){
     unsub = this.database
        .where('room', '==', whichRoom)
     .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(element => {
                    const data = element.doc.data();
                    const id = element.doc.id;
                    if(element.type === 'added'){
                        callback(data, id);
                    }else if(element.type === 'removed'){
                        ui.removeElement(id);
                    }
                });
        });
    }

    async sendMessage(mesage){
  
        
        this.database.add(message)
            .then(e => {
                
            })
            .catch(err =>{
                //console.log('There was an error ', err);
            });
    }

}