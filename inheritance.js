class Parent{
    constructor(){
        this.fatherName = "mia";
    }
}

class Child extends Parent{
    constructor (name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " "+ this.fatherName;
    }
}
const baby = new Child("Kala");
const baby2 =new Child("sona");
console.log(baby.getFullName() );
console.log(baby2.getFullName());
