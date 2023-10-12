
let accordianHeadings = document.querySelectorAll(".accordian-heading");
console.log(accordianHeadings);

const accordianContent = document.querySelectorAll(".accordian-content");
console.log(accordianContent);


accordianHeadings.forEach(function (i) {
    i.addEventListener("click", function () {
        accordianContent.classList.toggle("hidden");
    })
})

// accordianHeading.forEach(function (item) {
//     item.addEventListener("click", function () {
//         const isItemOpen = item.classList.contains("hidden"); // check if item is opened first
//         accordianHeading.forEach(function (item) {
//             item.classList.remove("hidden");
//         })
//         if (!isItemOpen) {
//             item.classList.toggle("hidden");
//         }
//     })
// })