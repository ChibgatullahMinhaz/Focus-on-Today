const checkboxs = document.querySelectorAll(".custom_checkbox");
const inputFields = document.querySelectorAll(".goal_input");
const progressbar = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value');

const allgoals = JSON.parse(localStorage.getItem('allgoals')) || {};

checkboxs.forEach((checked) => {
    checked.addEventListener("click", () => {
        const goapChecked = [...inputFields].every((e) => { //converting inputFeild in a new array
            console.log(e.value)
            return e.value;
        })
        if (goapChecked) {
            checked.parentElement.classList.toggle('completed');
        } else {
            progressbar.classList.add('show-error')
        }
    })
})
inputFields.forEach((input) => { // focusing on inputFeilds

    if (allgoals[input.id]) {
        input.value = allgoals[input.id].name;
        if (!allgoals[input.id]) {
            input.parentElement.classList.add('completed');
        }
    }
    input.addEventListener("focus", () => {
        progressbar.classList.remove('show-error')
    });
    input.addEventListener('input', () => {
        allgoals[input.id] = {
            name: input.value,
            completed: false,
        };
        console.log(allgoals)
        localStorage.setItem('allgoals', JSON.stringify(allgoals));
    })

})