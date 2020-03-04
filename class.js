//same amount property declear korte
class Student{ //class er por uppercase die start hbe
    constructor (sId,sName){
        this.id= sId;
        this.name = sName;
        this.school= "komola sundori high school";
    }
}
const std1 = new Student(11 ,"jakala");
const std2 = new Student(22, "komola");
console.log(std1,std2);
//only name jante caile
console.log(std1.name, std2.name);