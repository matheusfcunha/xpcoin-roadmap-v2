
const   ACCORDION_BTN_TITLE = document.getElementsByClassName("accordion");
const POINTER = document.getElementById("xp-pointer");
var i;
for (i = 0; i < ACCORDION_BTN_TITLE.length; i++) {
    ACCORDION_BTN_TITLE[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        //Toggle pointer
        this.insertBefore(POINTER, this.firstChild);

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
