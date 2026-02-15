const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("active");
    } else {
        sidebar.classList.toggle("collapsed");
    }

});