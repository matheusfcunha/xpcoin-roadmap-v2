
const ACCORDION_BTN_TITLE = document.getElementsByClassName("accordion");
const POINTER = document.getElementById("xp-pointer");
var i;
var j;

for (j = 0; j < ACCORDION_BTN_TITLE.length; j++) {
  ACCORDION_BTN_TITLE[j].addEventListener("mouseover", function() {
    POINTER.style.display = "inline-block";
    this.insertBefore(POINTER, this.firstChild);
  })
}

for (i = 0; i < ACCORDION_BTN_TITLE.length; i++) {
        ACCORDION_BTN_TITLE[i].addEventListener("click", function() {

          this.classList.toggle("active");

        for ( i = 0; i < ACCORDION_BTN_TITLE.length; i++) {
            panel = ACCORDION_BTN_TITLE[i].nextElementSibling;
            if (panel === this.nextElementSibling) { continue; }
            if (panel.style.display === "block") {
              panel.style.display = "none";
            }
          }

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
