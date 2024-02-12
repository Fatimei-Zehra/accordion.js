


// function accordion() {
//  
//     let labelText = document.querySelector(".accordion-item-text");

//     if (labelText.style.display = "none") {
//         .classList.toggle("active");
//         labelText.style.display = ("flex");
//     }

//     else {
//         label.classList.remove("active");
//         labelText.style.display = ("none");
//     }



// }

let label = document.getElementsByClassName("accordion");
for (let i = 0; i < label.length; i++) {
    label[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })

}

