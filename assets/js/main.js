var body = document.body;
var header = document.querySelector(".header__title");

window.onload = (e) => {
    window.onscroll = (e) => {
        if (this.scrollY > 400){
            header.classList.remove("header__title--hidden");
        } else {
            header.classList.add("header__title--hidden");
        }
    };
};