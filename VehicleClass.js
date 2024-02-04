class Bike {
    constructor(name,color,mileage,speed){
        this.name = name;
        this.color = color;
        this.mileage = mileage;
        this.speed = speed;
    }
}

var RoyalEnfield = new Bike("Classic 350", "Gun Metal Grey", "32", "120");
console.log(RoyalEnfield);

var Yamaha = new Bike("R15", "Red", "35", "130");
console.log(Yamaha);

var Bajaj = new Bike("Platina", "Black", "80", "70");
console.log(Bajaj);


class Students{
    constructor(name,age,cls,school){
        this.name = name;
        this.age = age;
        this.cls = cls;
        this.school = school;
    }
}

var Stu1 = new Students("Thirumaran M",33,"MCA","KMCPGS");
console.log(Stu1);
var Stu2 = new Students("Avaneesh T",8,"II","MVMHSS");
console.log(Stu2);
var Stu3 = new Students("Anbiniyan T",3,"Pre. KG","IIT");
console.log(Stu3);