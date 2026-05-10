class YoutubeChannel {
    constructor(){
        this.subscribers = [];
    }
    subscribe(user){
        this.subscribers.push(user)
        user.update(`you have subscribed the channel.`)    
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !== user)
        user.update(`you have unsubscribe the channel`)
    }
    notify(message){
        this.subscribers.forEach(sub => {
            sub.update(message)
        });
    }
}

class user {
    constructor(name){
        this.name = name
    }
    update(data){
        console.log(`${this.name}, ${data}`)
    }
}

let saurabhChannel = new YoutubeChannel ()
let user1 = new user('saurabh')
let user2 = new user("amit")

// console.log(user1)

saurabhChannel.subscribe(user1)
saurabhChannel.subscribe(user2)

saurabhChannel.notify("new video uploaded")