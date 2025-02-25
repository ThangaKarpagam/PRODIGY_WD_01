window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.background = "rgba(0, 123, 255, 0.8)"; // Change to a semi-transparent blue
    } else {
        navbar.style.background = "linear-gradient(to right, #007bff, #00aaff)"; // Original gradient
    }
};
