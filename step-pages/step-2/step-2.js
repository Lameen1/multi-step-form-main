const arcadeButton = document.querySelector(".arcade-button")
const advancedButton = document.querySelector(".advanced-button")
const proButton = document.querySelector(".pro-button")
const planButton = document.querySelectorAll(".plan-button")
const bottomPlan = document.querySelectorAll(".bottom-plan")
const planName = document.querySelectorAll(".plan-name")
const planPrice = document.querySelectorAll(".plan-price")
const monthlyType = document.querySelector(".monthly-type")
const planSwap = document.querySelector(".plan-type-swap")
const yearlyType = document.querySelector(".yearly-type")
const switchButton = document.querySelector(".plan-type-switch")
const planYearlyInfo = document.querySelectorAll(".plan-yearly-info")


const plans = [
  {
    name: "Arcade",
    price: 9,
    type: "Monthly"
  },
  {
    name: "Advanced",
    price: 12,
    type: "Monthly"
  },
  {
    name: "Pro",
    price: 15,
    type: "Monthly"
  },
  {
    name: "Arcade",
    price: 90,
    type: "Yearly"
  },
  {
    name: "Advanced",
    price: 120,
    type: "Yearly"
  },
  {
    name: "Pro",
    price: 150,
    type: "Yearly"
  }
]
let selectedPlan = []
console.log(planButton)

let yearOptionActive = false
console.log(planYearlyInfo[0].classList)

function screenUpdate (){
  if (yearOptionActive == false){
    arcadeButton.childNodes[3].childNodes[3].innerText = "$9/mo"
    advancedButton.childNodes[3].childNodes[3].innerText = "$12/mo"
    proButton.childNodes[3].childNodes[3].innerText = "$15/mo"
    monthlyType.style.color = "hsl(213, 96%, 18%)";
    yearlyType.style.color = "hsl(231, 11%, 63%)";
    if (planSwap.classList.contains("plan-type-swap-yearly")){
      planSwap.classList.remove("plan-type-swap-yearly")
      planYearlyInfo[0].classList.remove("show-yearly")
      planYearlyInfo[1].classList.remove("show-yearly")
      planYearlyInfo[2].classList.remove("show-yearly")
    }
  } 
  else{
    arcadeButton.childNodes[3].childNodes[3].innerText = "$90/yr"
    advancedButton.childNodes[3].childNodes[3].innerText = "$120/yr"
    proButton.childNodes[3].childNodes[3].innerText = "$150/yr"
    monthlyType.style.color = "hsl(231, 11%, 63%)";
    yearlyType.style.color = "hsl(213, 96%, 18%)";
    if (!planSwap.classList.contains("plan-type-swap-yearly")){
      planSwap.classList.add("plan-type-swap-yearly")
      planYearlyInfo[0].classList.add("show-yearly")
      planYearlyInfo[1].classList.add("show-yearly")
      planYearlyInfo[2].classList.add("show-yearly")
    }
    
  }
}

let selectHistory = []

function planSelection(e){
  yearOptionActive == false ? sortPlan = plans[e] 
  : sortPlan = plans[e + 3]
  planButtonStyle = planButton[e].style

  planButton.forEach( (j) => {
    j.style.backgroundColor = "white";
    j.style.borderColor = "hsl(229, 24%, 87%)";
  });
  const lastSelected = selectHistory[selectHistory.length-1]

  if (lastSelected === e){
    selectHistory = []
    selectedPlan = []
    return
  }

  selectHistory.push(e)

  if (selectedPlan.length === 0){
    selectedPlan.push(sortPlan)
    planButtonStyle.backgroundColor = "hsl(217, 100%, 97%)";
    planButtonStyle.borderColor = "hsl(243, 100%, 62%)";
  } else {
    selectedPlan.pop(sortPlan)
    selectedPlan.push(sortPlan)
    planButtonStyle.backgroundColor = "hsl(217, 100%, 97%)";
    planButtonStyle.borderColor = "hsl(243, 100%, 62%)";
  }
}

function resetPlan(){
  planButton.forEach( (j) => {
    j.style.backgroundColor = "white";
    j.style.borderColor = "hsl(229, 24%, 87%)";
  });
  selectHistory = []
  selectedPlan = []
}

function monthlyOption(){
  resetPlan()
  if (yearOptionActive == true){
    yearOptionActive = false
  }
  screenUpdate()
}

function swapOption(){
  resetPlan()
  yearOptionActive == false? yearOptionActive = true 
  : yearOptionActive = false;
  screenUpdate()
}

function yearlyOption(){
  resetPlan()
  if (yearOptionActive == false){
    yearOptionActive = true
  }
  screenUpdate()
}

function goBackButton(){
  window.location.pathname = "/multi-step-form-main/step-pages/step-1/step-1.html"
}

function nextStep2 (){
  if (selectedPlan.length !== 0 ){
    localStorage.setItem("userPlan", JSON.stringify(selectedPlan))
    localStorage.setItem("step2Yearly", JSON.stringify(yearOptionActive))
    window.location.pathname = "/multi-step-form-main/step-pages/step-3/step-3.html"
  }
}
