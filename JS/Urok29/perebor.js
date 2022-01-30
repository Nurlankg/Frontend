let ttl = document.querySelectorAll(".body_product > .ttl");
console.log(ttl);

for (let text of ttl){
    console.log(text);
}

var elements = document.getElementsByClassName("ul_li");

var myFunction = function() {
    var attribute = this.parentNode.parentNode.querySelectorAll(".price");
    console.log(attribute[0].innerText);
};

for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', myFunction, false);
}

var myFunction1 = function() {
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
    console.log(attribute[1].innerText);
};

for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', myFunction1, false);
}



