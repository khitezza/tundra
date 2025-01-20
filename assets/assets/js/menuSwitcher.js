menuSwitcher = function (menu_id) {
    var arr_class = document.getElementsByClassName("index-buoy");
    var arr_menu = document.getElementsByClassName("header-menu-item");
    var hero_overlay = document.getElementById("header-overlay")

    arr_class[menu_id].classList.replace('index-nodisplay', 'index-display');
    arr_menu[menu_id].classList.replace('menu-noactive', 'menu-active');

    sessionStorage.setItem("menu_id", menu_id);

    if (menu_id!=0){
        hero_overlay.classList.replace('header-overlay', 'header-overlay1');
    }else{
        hero_overlay.classList.replace('header-overlay1', 'header-overlay');
    }

    for (let i = 0; i < arr_class.length; i++) {
        if (i != menu_id) {
            arr_class[i].classList.replace('index-display', 'index-nodisplay');
            arr_menu[i].classList.replace('menu-active', 'menu-noactive');
        }
    }
}