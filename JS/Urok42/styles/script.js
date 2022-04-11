let click = document.getElementById("btn1");

// click.onclick = function () {
//     alert("najal");
// }

let del_elem = (event)=>{
    event.target.remove();
}

btn1.addEventListener("click", del_elem);
btn2.addEventListener("click", del_elem);
btn3.addEventListener("click", del_elem);
btn4.addEventListener("click", del_elem);
btn5.addEventListener("click", del_elem);