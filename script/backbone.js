class Backbone {
    constructor(room){
        this.database = db.collection(room)
    }

    async getMessages(callback){
        this.database.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(element => {
                const data = element.doc.data();

                callback(data);

                if(element.type === 'added'){
                    console.log('ADDED');
                }else if(element.type === 'removed'){
                    console.log('REMOVED');
                }
            });
        });
    }

    async sendMessage(mesage){
        
    }

}