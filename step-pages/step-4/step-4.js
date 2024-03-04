const finalPlan = document.querySelector(".final-plan")
const finalPlanPrice = document.querySelector(".cost-of-plan")
const finalAddOnContainer = document.querySelector(".final-add-on-container") // classes final-add-on-name final-add-on-price
const finalTotalContainer = document.querySelector(".total-plan-container") //classes total-plan total-plan-price
const finalTotalPlan = document.querySelector(".total-plan")
const finalTotalPlanPrice = document.querySelector(".total-plan-price")

const finalUserPlan = JSON.parse(localStorage.getItem("userPlan"))

  const finalUserAddOns = JSON.parse(localStorage.getItem("userAddOns"))
  
  let yearlyActive = JSON.parse(localStorage.getItem("step2Yearly"))
  let shortType = "/mo"
  let totalOfAddOns = 0


  yearlyActive == false 
  ? finalTotalPlan.innerText = "Total (per month)"
  : finalTotalPlan.innerText = "Total (per year)"
  yearlyActive == false
  ? let = shortType = "/mo"
  : let = shortType = "/yr"

  finalPlan.innerText = finalUserPlan[0].name + " (" + finalUserPlan[0].type + ")"
  finalPlanPrice.innerText = "$" + finalUserPlan[0].price + shortType

  if (finalUserAddOns.length > 0){
    for (i = 0; i < finalUserAddOns.length ; ++i){
      totalOfAddOns = totalOfAddOns + finalUserAddOns[i].price

      let elementBox = document.createElement('div')
      elementBox.className = "final-add-on"
      
      let addOnDiv = document.createElement('div')
      addOnDiv.className = "final-add-on-name"
      addOnDiv.innerText = finalUserAddOns[i].name

      let addOnPriceDiv = document.createElement('div')
      addOnPriceDiv.className = "final-add-on-price"
      addOnPriceDiv.innerText = "+$" + finalUserAddOns[i].price + shortType 
      
      finalAddOnContainer.appendChild(elementBox)
      elementBox.appendChild(addOnDiv)
      elementBox.appendChild(addOnPriceDiv)
    }
  }

  const grandTotal = totalOfAddOns + finalUserPlan[0].price
  finalTotalPlanPrice.innerText = "+$" + grandTotal + shortType




  function changePlan (){
  window.location.pathname = "/multi-step-form-main/step-pages/step-2/step-2.html"
}

  function goBackButton (){
    window.location.pathname = "/multi-step-form-main/step-pages/step-3/step-3.html"
  }

  function finalSubmit (){
    window.location.pathname = "/multi-step-form-main/step-pages/step-5/step-5.html"
  }
