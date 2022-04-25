


// class user_{

//     constructor (name,surname,year){
//         this.name = name,
//         this.surname = surname,
//         this.year = year;
//     }
// }



// class student extends user_{

//     constructor (name,surname,year,current_year){
//         super(name,surname,year);

//         this.current_year = current_year;
//     }    



//     getFullName(){
//         console.log(this.name,this.surname)
//     }


//     getCourse(){
//         return this.current_year - this.year;
//     }
// }

// let student1 = new student("Anvar","Abdi",2019,2022);

// student1.getFullName();
// console.log(student1.getCourse());

const data = {
    name: "Nurlan",
    age: 36,
    parent: {
        parent1: "new_obj1",
        parent2: "new_obj2"
    }
};

console.log(data);
console.log(JSON.stringify(data));
console.log(JSON.parse(JSON.stringify(data)));