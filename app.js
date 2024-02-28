let chosenContainer = document.querySelector('.card-container');
let containers = document.querySelectorAll('.card-container');
containers.forEach(function (i) {
    i.addEventListener('click', function (e) {
        toggle();
        chosenContainer = i;
        toggle();
    })
})


function toggle() {
    chosenContainer.classList.toggle('chosen');
    chosenContainer.querySelector('.card-img').classList.toggle('chosen-img');
    chosenContainer.querySelector('.text').classList.toggle('hidden-text')

}