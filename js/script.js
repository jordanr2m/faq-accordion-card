const accordianItems = document.querySelectorAll(".accordian-item");
// console.log(accordianItems);


// Code to make a simple accordian
for (i = 0; i < accordianItems.length; i++) {
    accordianItems[i].addEventListener("click", function () {
        // Toggle between adding and removing the "active" class,
        // to highlight the button that controls the panel 
        this.classList.toggle("active");
    });
}