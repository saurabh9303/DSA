// class CreatePen {
//     constructor(name, company, price, color){
//         this.name = name;
//         this.company = company;
//         this.price = price;
//         this.color= color;
//     }

//     // erase(){
//     //     document.querySelectorAll("h1").forEach((element)=>{
//     //         if(element.style.color === this.color){
//     //             element.remove();
//     //         }
//     //     })
//     // }

//     write(text){
//         let h1 = document.createElement("h1")
//         h1.textContent = text
//         h1.style.color = this.color;
//         document.body.append(`${this.name} : ${h1}`)
//     }
// }

// class Admin extends CreatePen {
//     constructor(name, company, price, color){
//         super(name, company, price, color)
//         this.neme = 
//     }
// }

// let pen1 = new CreatePen ("cellopen", "cello", 5, "green")
// let pen2 = new CreatePen ("Alcose Better", "cello", 5, "red")






class User {
    constructor(name, address, username, email, color){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.color= color;
        this.role = "user"
    }

    // erase(){
    //     document.querySelectorAll("h1").forEach((element)=>{
    //         if(element.style.color === this.color){
    //             element.remove();
    //         }
    //     })
    // }

    write(text){
        let h1 = document.createElement("h1")
        h1.textContent = `${this.name} : ${text}`;
        h1.style.color = this.color;
        document.body.append(h1)
    }
}

class Admin extends User {
    constructor(name, address, username, email, color){
        super(name, address, username, email, color)
        this.role = "admin" 
    }

    erase (){
        document.querySelectorAll("h1").forEach(element => {
            element.remove();
        });
    }
}


let u1 = new User(
    "saurabh",
    "satna",
    "saurabh0nly",
    "saurabh@113",
    "red"
);

let u2 = new User(
    "surbhi",
    "rewa",
    "surbhiiiii",
    "saurabh@113",
    "green"
);

let admin = new Admin(
    "saurabhhhhhh",
    "bhopal",
    "adminnnnn",
    "ad@234",
    "blue"
);

u1.write("hello");
u2.write("hi");
admin.write("I am admin");

