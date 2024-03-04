function menuClick() {
    var navbarElement = document.getElementsByClassName("navbar");
    var hamMenu = document.getElementsByClassName("hamburger-menu");
    if(navbarElement[0].style.display == "flex") {
        navbarElement[0].style.setProperty("display", "none");
        navbarElement[0].classList.toggle("open");
        hamMenu[0].classList.toggle("open");
    } else {
        navbarElement[0].style.setProperty("display", "flex");
        navbarElement[0].classList.toggle("open");
        hamMenu[0].classList.toggle("open");
    }
}