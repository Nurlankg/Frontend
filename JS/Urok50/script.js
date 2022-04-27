
(function(){
    'use strict';

    function loadScript(src) {
        return new Promise(function(resolve, reject) {
            let script = document.createElement('script');
            script.src = src;
      
            resolve(script);
      
            document.head.append(script);

        }).catch(() =>{
            alert("Ошибка загрузки");
        });
    }

        let promise = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js");

        let bootstrap = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js");

        promise.then(
            script => alert("script загружен!"),
            error => alert("Ошибка загрузки")
        ); 

        bootstrap.then(
            script => alert("script загружен!"),
            error => alert("Ошибка загрузки")
        ); 

}());
