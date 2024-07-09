class User{
    constructor(name, age){
        this.name = name
        try{
            this.age = +age
        }
        catch (e){
            alert(e)
        }
    }

    hello(){
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old`)
    }
}

class Student extends User{
    #knoledge = 0

    constructor(name, age){
        super(name, age)
    }

    hello(){
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old. And I am student!`)
    }

    learn(){
        this.#knoledge += 1
    }
}