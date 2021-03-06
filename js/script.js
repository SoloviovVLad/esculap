window.addEventListener("load", () => {
    let burgerOff = document.querySelector(".burger-wrapper__burger");
    let burgerOffLineTop = document.querySelector(".burger-wrapper__burger--lt");
    let burgerOffLineMiddle = document.querySelector(".burger-wrapper__burger--lm");
    let burgerOffLineBottom = document.querySelector(".burger-wrapper__burger--lb");
    const form = document.querySelector(".form");
    const formmenu = document.querySelector(".form-menu");
    const overlay = document.querySelector(".overlay");
    const close = document.querySelector(".form__notification__close");
    const closemenu = document.querySelector(".form-menu__notification__close");
    const menu = document.querySelector(".block-header__nav");
    const main = document.querySelector("main");
    const accept = document.querySelector(".accept")
    const btn = document.querySelector(".accept__btn");
    const hiremebtn = document.querySelector(".block-header__button");
    const menubtn = document.querySelector(".block-header__button--menu")


    burgerOff.onclick = function () {
        burgerOffLineTop.classList.toggle("burger-wrapper__burgerOn--ltOn");
        burgerOffLineMiddle.classList.toggle("burger-wrapper__burgerOn--lmOn");
        burgerOffLineBottom.classList.toggle("burger-wrapper__burgerOn--lbOn");
        burgerOff.classList.toggle("burger-wrapper__burgerOn");
        menu.classList.toggle("menu-active");
        main.classList.toggle("main-active");


    }

    // ***MENU*************

    menubtn.onclick = function () {
        formmenu.style.display = "block";
        overlay.style.display = "block";
    }

    closemenu.onclick = function () {
        formmenu.style.display = "";
        overlay.style.display = "";
    }

    overlay.onclick = function () {
        formmenu.style.display = "";
        overlay.style.display = "";
    }

    // ************



    hiremebtn.onclick = function () {
        form.style.display = "block";
        overlay.style.display = "block";
    }

    btn.onclick = function () {
        accept.style.display = "none";
    }

    close.onclick = function () {
        form.style.display = "";
        overlay.style.display = "";
    }

    overlay.onclick = function () {
        form.style.display = "";
        overlay.style.display = "";
    }

    setTimeout(() => {
        form.style.display = "block";
        overlay.style.display = "block";
        close.onclick = function () {
            form.style.display = "";
            overlay.style.display = "";
        }

        overlay.onclick = function () {
            form.style.display = "";
            overlay.style.display = "";
        }
    }, 2000);


});