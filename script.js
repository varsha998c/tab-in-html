// let menu_icon = document.querySelector(".year1");
// let menu_container = document.querySelector("#bottom-gallery");
// menu_icon.addEventListener("click", () => {
//     menu_container.classList.toggle("active");
// });
// let menu_icon1 = document.querySelector(".year2");
// let menu_container1 = document.querySelector("#bottom-gallery1");
// menu_icon1.addEventListener("click", () => {
//     menu_container1.classList.toggle("active");
// });

// let menu_icon3 = document.querySelector(".year3");
// let menu_container3 = document.querySelector("#bottom-gallery3");
// menu_icon3.addEventListener("click", () => {
//     menu_container3.classList.toggle("active");
// });

function showGallery(evt, imagename) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("year");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    (document.getElementById(imagename).style.display = "flex"),
        (evt.currentTarget.className += " active");
}
