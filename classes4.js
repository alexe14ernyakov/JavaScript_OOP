class User{
    #age = 0

    constructor(name){
        this.name = name
    }

    set age(value){
        if (typeof value !== 'number'){
            alert("Incorrect age value")
        }

        if(value < 101 && value > 0){
            try{
                this.#age = +age
            }
            catch (e){
                alert(e)
            }
        }
        else{
            alert("Age should be in range 1-100")
        }
    }

    get age() {
        return this.#age
    }

    hello(){
        console.log(`Hi! My name is ${this.name}. And I am ${this.#age} years old`)
    }
}