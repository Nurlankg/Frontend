



(function() {
    'use strict';

    const inputSom = document.querySelector("#som");
    const inputUSD = document.querySelector("#usd");
    const inputRUB = document.querySelector("#rub");
    const inputSom1 = document.querySelector("#som1");
    const inputSom2 = document.querySelector("#som2");
    const inputEU = document.querySelector("#euro");


    inputSom.addEventListener( 'input', () =>{

        fetch('current.json')
        .then((response) => {
        return response.json();
        })

        .then((data) => {

            const currency = data;
            const result = inputSom.value / currency.current.usd;
            inputUSD.value = result.toFixed(2);

        });

        
        
    });

    inputUSD.addEventListener( 'input', () =>{
        
        fetch('current.json')
        .then((response) => {
        return response.json();
        })

        .then((data) => {

            const currency = data;
            const result = inputUSD.value * currency.current.usd;
            inputSom.value = result.toFixed(2);

        });
    });

    inputSom1.addEventListener( 'input', () =>{
        
        fetch('currentSom.json')
        .then((response) => {
        return response.json();
        })

        .then((data) => {

            const currency = data;
            const result = inputSom1.value * currency.current.ruble;
            inputRUB.value = result.toFixed(2);

        });
    });

    inputRUB.addEventListener( 'input', () =>{
        
        fetch('currentSom.json')
        .then((response) => {
        return response.json();
        })

        .then((data) => {

            const currency = data;
            const result = inputRUB.value / currency.current.ruble;
            inputSom1.value = result.toFixed(2);

        });
    });

    inputSom2.addEventListener( 'input', () =>{
        
        fetch('currentEU.json')
        .then((response) => {
        return response.json();
        })

        .then((data) => {

            const currency = data;
            const result = inputSom2.value / currency.current.euro;
            inputEU.value = result.toFixed(2);

        });

        
    });

    inputEU.addEventListener( 'input', () =>{
        
        fetch('currentEU.json')
        .then((response) => {
        return response.json();
        })

        .then((data) => {

            const currency = data;
            const result = inputEU.value * currency.current.euro;
            inputSom2.value = result.toFixed(2);

        });

        
    });



}());