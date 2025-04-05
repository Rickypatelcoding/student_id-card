let btn = document.querySelector('#submit');
let nameInput = document.querySelector('#fullname');
let text = document.querySelector('#idNum');
let text_2 = document.querySelector('#role');
let text_3 = document.querySelector('#course');
let text_4 = document.querySelector('#college');

// ID card elements
let IDnNme = document.querySelector('#IDnNme');
let num = document.querySelector('#num');
let art = document.querySelector('#art');
let courseDisplay = document.querySelector('#courseDisplay');
let collegeDisplay = document.querySelector('#collegeDisplay');
let error = document.querySelector('.error');
let card = document.querySelector('.card');

function validateInput() {
    let idValue = text.value.trim();
    let roleValue = text_2.value.trim();
    let courseValue = text_3.value.trim();
    let collegeValue = text_4.value.trim();

    if (!idValue || !roleValue || !courseValue || !collegeValue) {
        error.innerHTML = `Please Enter All Values`;
        error.style.display = 'block';
        return false;
    }

    if (isNaN(idValue)) {
        error.innerHTML = 'You must add Numbers';
        error.style.display = 'block';
        return false;
    }

    if (idValue.length !== 5) {
        error.innerHTML = 'You must add exactly 5 Numbers';
        error.style.display = 'block';
        return false;
    }

    error.style.display = 'none';
    card.style.display = 'block';
    return true;
}

function display() {
    IDnNme.textContent = nameInput.value;
    num.textContent = text.value;
    art.textContent = text_2.value;
    courseDisplay.textContent = text_3.value;
    collegeDisplay.textContent = text_4.value;
}

let fileInput = document.querySelector('.img');
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file && file.type.match('image.*')) {
        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        error.innerHTML = 'Please upload a valid image file';
        error.style.display = 'block';
    }
});


btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (validateInput()) {
        display();
    }
});
