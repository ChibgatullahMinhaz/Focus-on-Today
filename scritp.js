const checkboxs = document.querySelectorAll(".custom_checkbox");
const inputFields = document.querySelectorAll(".goal_input");
const progressbar = document.querySelector('.progress-bar');
const progressValue= document.querySelector('.progress-value');

checkboxs.forEach((checked) => {
    checked.addEventListener("click", () => {
        const goapChecked = [...inputFields].every((e) => {
            console.log(e.value)
            return e.value;
        })
        if (goapChecked) {
            checked.parentElement.classList.toggle('completed');
            progressValue.style.width = '33.33%';
        } else {
            progressbar.classList.add('show-error')
        }
    })
})
inputFields.forEach((input)=>{
    input.addEventListener("focus", ()=>{
        progressbar.classList.remove('show-error')
    })
})