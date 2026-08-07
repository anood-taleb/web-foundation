let isDark = false;

function toggleDark() {
    isDark = !isDark;

    if (isDark) {
        document.body.style.backgroundColor = "darkblue";
        document.body.style.color = "beige";

        document.querySelector("header").style.backgroundColor = "skyblue";
        document.querySelector("header").style.color = "white";

        document.querySelector("footer").style.backgroundColor = "skyblue";
        document.querySelector("footer").style.color = "white";

        document.querySelectorAll(".room-card, .service-card").forEach(function(card) {
            card.style.backgroundColor = "green";
            card.style.color = "orange";
        });
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        document.querySelector("header").style.backgroundColor = "";
        document.querySelector("header").style.color = "";

        document.querySelector("footer").style.backgroundColor = "";
        document.querySelector("footer").style.color = "";

        document.querySelectorAll(".room-card, .service-card").forEach(function(card) {
            card.style.backgroundColor = "";
            card.style.color = "";
        });
    }
}