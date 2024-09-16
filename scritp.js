const checkboxs = document.querySelectorAll(".custom_checkbox");
const inputFields = document.querySelectorAll(".goal_input");
const progressbar = document.querySelector('.progress-bar');
const progressValue= document.querySelector('.progress-value');

const allgoals = {};

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
inputFields.forEach((input)=>{ // focusing on inputFeilds
    input.addEventListener("focus", ()=>{
        progressbar.classList.remove('show-error')
    })
})