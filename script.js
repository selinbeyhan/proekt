const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-open-button");


menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click
());

document.querySelectorAll('.rating input').forEach(star => {
    star.addEventListener('change', function() {
        alert("Избрана точка: " + this.value);
    });
});

// Dropdown Menüsünü Açma/Kapama
document.querySelector('.nav-link').addEventListener('click', function(e) {
    e.preventDefault(); // Sayfanın yenilenmesini engelle
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.classList.toggle('show'); // Menü açma/kapama
    
    // Eğer menü açılmışsa, kapatmak için diğer menülere tıklanınca kapanması sağlanabilir
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== dropdownMenu) {
            menu.classList.remove('show');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let dropdownItems = document.querySelectorAll(".nav-items");

    dropdownItems.forEach((item) => {
        let link = item.querySelector(".nav-link");
        let menu = item.querySelector(".dropdown-menu");

        if (menu) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                let isOpen = menu.style.display === "block";

                // Önce diğer açık menüleri kapat
                document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
                    dropdown.style.display = "none";
                });

                // Sadece tıklanan menüyü aç/kapat
                menu.style.display = isOpen ? "none" : "block";
            });
        }
    });

    // Sayfada başka bir yere tıklanınca menüyü kapat
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-items")) {
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                menu.style.display = "none";
            });
        }
    });
});