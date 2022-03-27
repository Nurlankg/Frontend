let class_name = document.getElementsByClassName("add_cart");

var myFunction = function(){
    let ttl = this.parentNode.parentNode.parentNode.querySelectorAll(".body_product p");
    let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price span");
    let img = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img img");

    let create_li = document.createElement('li');
    create_li.classList.add("bag_item");

    console.log(ttl[0].innerText);
    console.log(price[0].innerText);
    console.log(img[0].src);

    create_li.innerHTML =   '<div class="bag_img">\
                                <a href="#">\
                                    <img src="'+img[0].src+'" alt="">\
                                </a>\
                            </div>\
                            <div class="bag_info">\
                                <p class="info_title"><a href="#">'+ttl[0].innerText+'</a></p>\
                                <div class="info_price">\
                                    <span>'+price[0].innerText+'</span>\
                                </div>\
                                <div class="trash">\
                                    <a href="#"><i class="far fa-trash-alt"></i></a>\
                                </div>\
                            </div>';  

    let block_cart = document.querySelector('.dropdown_menu ul');
    block_cart.appendChild(create_li);
    alert("Товар успешно добавлен в корзину")

    delete_product();
};

for (var i = 0; i < class_name.length; i++){
    class_name[i].addEventListener('click', myFunction, false);
}

function delete_product(){
    let click_trash = document.querySelectorAll(".trash");

    for (var i = 0; i < click_trash.length; i++){
        click_trash[i].addEventListener('click', del_func, false);
    }

    function del_func(){
        this.parentNode.parentNode.remove();
    }
}

