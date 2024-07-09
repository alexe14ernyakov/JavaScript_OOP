class User{
    _tel = "+79999999999"

    constructor(name, age){
        this.name = name
        try{
            this.age = +age
        }
        catch (e){
            alert(e)
        }
    }

    set tel(value){
        let re = /^\+7\d{10}$/
        if (re.test(value)){
            this._tel = value
        }
        else{
            alert("Некорректный номер телефона")
        }    
    }

    get tel(){
        return this._tel
    }

    hello(){
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old`)
    }
}