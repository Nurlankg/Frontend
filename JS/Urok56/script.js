
(function() {
    'use strict';

    const chek_name = localStorage.getItem('name');
    const chek_sname = localStorage.getItem('sname');
    const chek_fnumber = localStorage.getItem('fnumber');
    const chek_adress = localStorage.getItem('adress');


    if(chek_name && chek_sname && chek_fnumber && chek_adress){
        document.querySelector("[name = 'name']").value = chek_name;
        document.querySelector("[name = 'sname']").value = chek_sname;
        document.querySelector("[name = 'fnumber']").value = chek_fnumber;
        document.querySelector("[name = 'adress']").value = chek_adress;
    };

    const btn_save = document.querySelector(".form [name='save']");
    btn_save.addEventListener('click', function(e){
        e.preventDefault();
        
        const name = document.querySelector("[name = 'name']").value;
        const sname = document.querySelector("[name = 'sname']").value;
        const fnumber = document.querySelector("[name = 'fnumber']").value;
        const adress = document.querySelector("[name = 'adress']").value;

        


        if(name && sname && fnumber && adress){
            localStorage.setItem('name', name);
            localStorage.setItem('sname', sname);
            localStorage.setItem('fnumber', fnumber);
            localStorage.setItem('adress', adress);

            alert("Заявка принята!");
        }
        else{
            alert("Не все поля заполнены!");     
        }

        
    });

    const btn_reset = document.querySelector(".form [name='reset']");
    btn_reset.addEventListener('click', function(e){
        e.preventDefault();

        localStorage.clear();

        alert("Данные сброшены!");
        
    });

    
    


}());