const addOnOption = document.querySelectorAll(".add-on-select")
const checkbox = document.querySelectorAll(".checkbox-select")
const backButton = document.querySelector(".back-step-button")
const addOnPrice = document.querySelectorAll(".add-on-price")

const addOnInfo = [
  {
    plan: "Monthly",
    name: "Online service",
    price: 1
  },
  {
    plan: "Monthly",
    name: "Larger storage",
    price: 2
  },
  {
    plan: "Monthly",
    name: "Customiable Profile",
    price: 2
  },
  {
    plan: "Yearly",
    name: "Online service",
    price: 10
  },
  {
    plan: "Yearly",
    name: "Larger storage",
    price: 20
  },
  {
    plan: "Yearly",
    name: "Customiable Profile",
    price: 20
  }
]

let selectedAddOnsList = 0

let yearlyActive = JSON.parse(localStorage.getItem("step2Yearly"))

if (yearlyActive == true){
  addOnPrice[0].innerText = "+10/yr"
  addOnPrice[1].innerText = "+20/yr"
  addOnPrice[2].innerText = "+20/yr"
}

function selectAddOn(e){
  selectedAddOnsList = []
  
  checkbox[e].checked ? uncheck(e) : check(e)
  
  if (yearlyActive == false){
    for (i = 0; i < 3; ++i){
      if (checkbox[i].checked){
        selectedAddOnsList.push(addOnInfo[i])
      } 
    }
  }
  if (yearlyActive == true){
    for (i = 0; i < 3; ++i){
      if (checkbox[i].checked){
        selectedAddOnsList.push(addOnInfo[i + 3])
      } 
    }
  }
}

function check (e){
  checkbox[e].checked = true
  addOnOption[e].style.backgroundColor = "hsl(217, 100%, 97%)"
  addOnOption[e].style.borderColor = "hsl(243, 100%, 62%)"
}

function uncheck (e){
  checkbox[e].checked = false
  addOnOption[e].style.backgroundColor = null
  addOnOption[e].style.borderColor = "hsl(231, 11%, 63%)"
}

function goBackButton (){
  window.location.pathname = "/multi-step-form-main/step-pages/step-2/step-2.html"
}

function nextStep3(){
  if (selectedAddOnsList.length == 0){
    window.location.pathname = "/step-pages/step-4/step-4.html"
  } else {
    localStorage.setItem("userAddOns", JSON.stringify(selectedAddOnsList))
    window.location.pathname = "/multi-step-form-main/step-pages/step-4/step-4.html"
  }
}
