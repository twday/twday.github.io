var body = document.body;
var header = document.querySelector(".header__title");
var sections = document.querySelectorAll("section");

/*window.onload = (e) => {
    window.onscroll = (e) => {
        if (this.scrollY > sections[0].offsetHeight){
            header.classList.remove("header__title--hidden");
        } else {
            header.classList.add("header__title--hidden");
        }

        var height = (window.innerHeight || document.documentElement.clientHeight);
        sections.forEach((section, index) => {
            var bounds = section.getBoundingClientRect();
            var id = section.querySelector('a').id;
            var link = document.querySelector("a[href='#"+id+"']");

            if (bounds.top >= -150 && bounds.bottom <= height + 150){
                link.classList.add("nav-item_active");
            } else {
                link.classList.remove("nav-item_active");
            }

        });
    };
};*/