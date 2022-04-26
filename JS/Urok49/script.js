



(function() {
    'use strict';

    const inputSom = document.querySelector("#som");
    const inputUSD = document.querySelector("#usd");
    const inputRUB = document.querySelector("#rub");
    const inputSom1 = document.querySelector("#som1");


    inputSom.addEventListener( 'input', () =>{
        
        const request = new XMLHttpRequest();
        request.open("GET", "current.json");
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request.send();

        // request.addEventListener("readystatechange", () =>{
        //     if(request.readyState === 4 && request.status === 200){
        //         console.log(request.response);
        //         console.log(JSON.parse(request.response));

        //         const currency = JSON.parse(request.response);
        //         const result = inputSom.value / currency.current.usd;
        //         inputUSD.value = result.toFixed(2);
        //     }
        // })

        request.addEventListener("load", () =>{
            if(request.status === 200){
                console.log(JSON.parse(request.response));

                const currency = JSON.parse(request.response);
                const result = inputSom.value / currency.current.usd;
                inputUSD.value = result.toFixed(2);
            }
        });
    });

    inputUSD.addEventListener( 'input', () =>{
        
        const request = new XMLHttpRequest();
        request.open("GET", "current.json");
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request.send();

     
        request.addEventListener("load", () =>{
            if(request.status === 200){
                console.log(JSON.parse(request.response));

                const currency = JSON.parse(request.response);
                const result = inputUSD.value * currency.current.usd;
                inputSom.value = result.toFixed(2);
            }
        });
    });

    inputSom1.addEventListener( 'input', () =>{
        
        const request = new XMLHttpRequest();
        request.open("GET", "currentSom.json");
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request.send();

     
        request.addEventListener("load", () =>{
            if(request.status === 200){
                console.log(JSON.parse(request.response));

                const currency = JSON.parse(request.response);
                const result = inputSom1.value / currency.current.ruble;
                inputRUB.value = result.toFixed(2);
            }
        });
    });

    inputRUB.addEventListener( 'input', () =>{
        
        const request = new XMLHttpRequest();
        request.open("GET", "currentSom.json");
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request.send();

     
        request.addEventListener("load", () =>{
            if(request.status === 200){
                console.log(JSON.parse(request.response));

                const currency = JSON.parse(request.response);
                const result = inputRUB.value * currency.current.ruble;
                inputSom1.value = result.toFixed(2);
            }
        });
    });

    

    

}());

