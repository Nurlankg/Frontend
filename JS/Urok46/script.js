


// class user_{

//     constructor (name,surname,year){
//         this.name = name,
//         this.surname = surname,
//         this.year = year;
//     }
// }



// class student extends user_{

//     constructor (name,surname,year,current_year){
//         super(name,surname,year);

//         this.current_year = current_year;
//     }    



//     getFullName(){
//         console.log(this.name,this.surname)
//     }


//     getCourse(){
//         return this.current_year - this.year;
//     }
// }

// let student1 = new student("Anvar","Abdi",2019,2022);

// student1.getFullName();
// console.log(student1.getCourse());


class product_list{

    constructor(tooltip,img1,ttl,oprice,del_price,body_block){
        this.tooltip = tooltip;
        this.img1 = img1;
        this.ttl = ttl;
        this.oprice = oprice;
        this.del_price = del_price;
        this.body_block = document.querySelector(body_block);
        this.kurs = 85;
        this.oprice = this.convertToUSD(this.oprice);
        this.del_price = this.convertToUSD(this.del_price);
    }

    convertToUSD(price){
        const result = price / this.kurs;
        return result;
    }
    
    render() {
        const div = document.createElement("div");
        div.classList.add("list_product");
        div.innerHTML = `
                        <div class="img">
                            <div class="tooltip bg_green">
                                <span>${this.tooltip}</span>
                            </div>
                            <img class="img1" src=${this.img1} alt="">
                            <div class="desk_img">
                                <div class="desk">
                                    <p class="ttl">Заголовок</p>
                                    <p>Lorem, ipsum dolor.вот <span class="yellow">это</span> </p>
                                </div>                                       
                            </div>
                        </div>
                        <div class="body_product">
                            <p class="ttl">${this.ttl}</p>
                            <div class="block_stars">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="reviews">
                                    <span>10 review(s)</span>
                                </div>
                            </div>
                            <div class="price">
                                <span class="currency">$</span>
                                <span class="oprice">${this.oprice}</span>
                                <del class="del_price">$ ${this.del_price}</del>
                            </div>
                            <div class="btns hide">
                                <ul class="ul_li">
                                    <li class="add_cart">
                                        <span class="logo_style">
                                            <i class="fas fa-shopping-bag"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="logo_style">
                                            <i class="fas fa-search-plus"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="logo_style">
                                            <i class="far fa-heart"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>                               
                        </div>
        `;

        this.body_block.append(div);
    }
}

new product_list(
    'sdsd',
    'img/img24.jpg',
    'TEST',
    '.list_product'
).render();