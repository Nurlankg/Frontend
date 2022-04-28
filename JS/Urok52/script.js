



(function() {
    'use strict';


    const array = ['1','2','3'];
    const result = array.map(string => +string);
    console.log(result);

    const summa = result.reduce((count, item) => count + item);
    console.log(summa);


}());


