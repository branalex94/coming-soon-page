const form = document.querySelector(".main__email-input");
const formInput = document.querySelector(".main__input");
const warningMsg = document.querySelector(".form__warning-msg");
const warningIcon = document.querySelector(".form__warning-icon");

function checkEmail(e) {
  e.preventDefault();
  const MailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!MailRegex.test(formInput.value)) {
    warningMsg.classList.add("active");
    formInput.classList.add("warning");
    warningIcon.classList.add("active");
    setTimeout(() => {
      warningMsg.classList.remove("active");
      formInput.classList.remove("warning");
      warningIcon.classList.remove("active");
    }, 3000);
  }
}

form.addEventListener("submit", checkEmail);
