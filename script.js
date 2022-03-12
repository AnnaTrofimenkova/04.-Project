let newText = "Круто, спасибо за доверие!";
const buttonForm = document.querySelector(".button-input__button");


function formSave(button) {
	button.textContent = newText;
}
buttonForm.addEventListener('click', function (e) {
	formSave(e.target);
})
