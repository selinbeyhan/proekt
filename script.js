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
document.addEventListener("DOMContentLoaded", function () {
    const propertyButton = document.querySelector(".post-property-btn");
    const dropdownMenu = document.querySelector(".property-dropdown");
    const navbar = document.querySelector("header");

    propertyButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Sayfanın diğer alanlarına tıklanınca kapanmasını sağlar

        // Menü açma-kapama
        dropdownMenu.classList.toggle("active");

        // Arka plan küçültme
        if (dropdownMenu.classList.contains("active")) {
            navbar.classList.add("shrink-background");
        } else {
            navbar.classList.remove("shrink-background");
        }
    });

    // Sayfanın başka bir yerine tıklayınca menüyü kapat
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && !propertyButton.contains(event.target)) {
            dropdownMenu.classList.remove("active");
            navbar.classList.remove("shrink-background");
        }
    });
});
    
    //ценови диапазон//
    document.getElementById('filter-btn').addEventListener('click', function() {
        var minPrice = parseFloat(document.getElementById('min-price').value) || 0;
        var maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
    
        var ads = document.querySelectorAll('.ad-item'); // всички обяви на сайта
    
        ads.forEach(function(ad) {
            var price = parseFloat(ad.getAttribute('data-price')); // цена на всяка обява
    
            if (price >= minPrice && price <= maxPrice) {
                ad.style.display = 'block'; // показва обявата, ако отговаря на условията
            } else {
                ad.style.display = 'none'; // скрива обявата
            }
        });
    });
/*рейтинг*/

// Her bir satıcı için yıldızları seç
const starsContainers = document.querySelectorAll('.stars');

starsContainers.forEach(container => {
  const stars = container.querySelectorAll('span'); // Yıldızları al
  let currentRating = 0; // Başlangıçta puan sıfır

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      // Puanı güncelle
      currentRating = index + 1; // Tıklanan yıldıza kadar olan yıldızları aktif yap
      updateStars(stars, currentRating); // Yıldızları güncelle
    });

    star.addEventListener('mouseover', () => {
      // Hover efekti ile yıldızları renklendir
      updateStars(stars, index + 1);
    });

    star.addEventListener('mouseout', () => {
      // Hover bittiğinde, aktif puanı geri getir
      updateStars(stars, currentRating);
    });
  });

  // Yıldızları güncelleyen fonksiyon
  function updateStars(stars, rating) {
    stars.forEach((star, idx) => {
      if (idx < rating) {
        star.classList.add('active'); // Aktif yıldız
      } else {
        star.classList.remove('active'); // Pasif yıldız
      }
    });
  }
});
/*deneme*/
    // Sayfada başka bir yere tıklanınca menüyü kapat
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-items")) {
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                menu.style.display = "none";
            });
        }
    });

document.addEventListener("DOMContentLoaded", function () {
    const propertyButton = document.querySelector(".post-property-btn");
    const dropdownMenu = document.querySelector(".property-dropdown");
    const navbar = document.querySelector("header");

    propertyButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Sayfanın diğer alanlarına tıklanınca kapanmasını sağlar

        // Menü açma-kapama
        dropdownMenu.classList.toggle("active");

        // Arka plan küçültme
        if (dropdownMenu.classList.contains("active")) {
            navbar.classList.add("shrink-background");
        } else {
            navbar.classList.remove("shrink-background");
        }
    });

    // Sayfanın başka bir yerine tıklayınca menüyü kapat
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && !propertyButton.contains(event.target)) {
            dropdownMenu.classList.remove("active");
            navbar.classList.remove("shrink-background");
        }
    });
});

