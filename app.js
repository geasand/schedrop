const cardBox = document.querySelectorAll ('.grid__item'),
card = document.querySelectorAll('.card');

//Loop through each boxes element
cardBox.forEach(box => {
    //When a card is dragged over a cardBox
    box.addEventListener("dragover", e => {
        e.preventDefault() //prevent default behaviour
        box.classList.add("hovered")
    })
    //When a card leaves a cardBox
    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered")
    })
    //When a card is dropped on a cardBox
    box.addEventListener("drop", () => {
        box.appendChild(card);
        box.classList.remove("hovered")
    })
})