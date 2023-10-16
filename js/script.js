const accordianItems = document.querySelectorAll(".accordian-item");
console.log(accordianItems);
// No period before class name when using getElementsByClassName! Can also use getElementsByClassName("accordian-item") instead of querrySelectorAll


// Code to make a simple accordian. For every container in accordion, Add a listener for click, If clicked, add class active
for (let i = 0; i < accordianItems.length; i++) {
    accordianItems[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}

// For any extra help, visit: https://www.frontendmentor.io/solutions/faq-accordion-card-tXbt2mFzRc