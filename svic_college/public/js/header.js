// ===============================
// MOBILE MENU
// ===============================

function openMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("screenOverlay");

    mobileMenu.classList.add("active");
    overlay.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("screenOverlay");

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

    document.body.style.overflow = "";

    // Close dropdowns
    document.querySelectorAll(".mobile-dropdown-menu").forEach(menu => {
        menu.classList.remove("show");
    });
}

// ===============================
// MOBILE DROPDOWN
// ===============================

function toggleMobileDropdown(element) {
    const parent = element.closest(".mobile-dropdown");

    if (!parent) return;

    const dropdown = parent.querySelector(".mobile-dropdown-menu");

    if (!dropdown) return;

    dropdown.classList.toggle("show");
}

// ===============================
// CLOSE WITH ESCAPE
// ===============================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeMobileMenu();
    }

});

// ===============================
// PREVENT MENU LINK ISSUES
// ===============================

document.querySelectorAll(".mobile-dropdown-menu a").forEach(link => {

    link.addEventListener("click", function() {
        closeMobileMenu();
    });

});