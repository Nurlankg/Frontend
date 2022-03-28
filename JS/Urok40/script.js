let salary = {
    almaz: 1200,
    adilet: 1300,
    nursultan: 3000,
};
let bonus = {
    almaz: 400,
    adilet: 300,
    nursultan: 200,
    __proto__: salary,
}

let salary_bonus = {
    __proto__: bonus,
    almaz: "almaz" + (salary.almaz + bonus.almaz), 
    adilet: "adilet" + (salary.adilet + bonus.adilet),
    nursultan: "nursultan" + (salary.nursultan + bonus.nursultan),
}

console.log(salary_bonus.almaz);
console.log(salary_bonus.adilet);
console.log(salary_bonus.nursultan);