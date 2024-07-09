function User(name, age) {
    this.name = name
    try{
        this.age = +age
    }
    catch (e){
        alert(e)
    }
}
User.prototype.hello = function () {
    console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old`)
}