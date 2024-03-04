const nameInput = document.getElementById('name-input')
const nameError = document.querySelector(".name-error")
const emailInput = document.getElementById('email-input')
const emailError = document.querySelector('.email-error')
const phoneInput = document.getElementById('phone-input')
const phoneError = document.querySelector('.phone-error')
const nextButton = document.querySelector('.next-step-button-step1')

const userComplete = {}

function step1Next (){
  if (nameInput.value && emailInput.value && phoneInput.value !== ""){
    const userPersonalInfo = {}
    userPersonalInfo.name = nameInput.value
    userPersonalInfo.email = emailInput.value
    userPersonalInfo.phone = phoneInput.value
    localStorage.setItem("userInfo", JSON.stringify(userPersonalInfo))
    window.location.pathname = "/multi-step-form-main/step-pages/step-2/step-2.html"
  }else{
    if (nameInput.value == ""){
      nameError.innerText = "This field is required"
    }else{
      nameError.innerText = ""
    }
    if (emailInput.value == ""){
      emailError.innerText = "This field is required"
    }else{
      emailError.innerText = ""
    }
    if (phoneInput.value == ""){
      phoneError.innerText = "This field is required"
    }else {
      phoneError.innerText = ""
    }
  }
}

