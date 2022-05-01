

class plus{
    constructor(num){
        this.num = num;
    }

    then(resolve, reject){

        setTimeout(() => resolve(this.num + 10), 5000);
    }
};  


async function resultat(){
    let result = await new plus(3);
    alert(result);
}

resultat();



