document.getElementById("calculate").addEventListener('click',function(e){
     // console.log('click')
     e.preventDefault()
     const income = getInputFild("income")
     
     const software = getInputFild("software")
     
     const courses = getInputFild("courses")
     
     const internet = getInputFild("internet")

     const totalCost = software + courses + internet
     // console.log(totalCost)
     const saving = income - totalCost
     // console.log(saving)
    const hidden = document.getElementById('results').classList.remove("hidden")
     
     const totalCostTanferd = document.getElementById("total-expenses").innerText=totalCost.toFixed(2);
     const totalBalance = document.getElementById("balance").innerText=saving.toFixed(2)
     const saveingInput = getInputFild('savings') 


})

// saving btn 
document.getElementById("calculate-savings").addEventListener('click',function(e){
 // console.log('click')
 e.preventDefault();
const income = getInputFild("income")
 const software = getInputFild("software")
const courses = getInputFild("courses") 
 const internet = getInputFild("internet")
 const totalCost = software + courses + internet
 const saving = income - totalCost
const saveingInput = getInputFild('savings') 
const percentage =( saveingInput * saving ) / 100
// console.log(percentage)
const savingNumber = document.getElementById("savings-amount").innerText=percentage
const remaineBalance = saving- percentage
const remain = document.getElementById("remaining-balance").innerText=remaineBalance
})

// assistance btn 
const assistanceBtn = document.getElementById("assistant-tab")
assistanceBtn.addEventListener('click',function(){
     // console.log('click')
     assistanceBtn.classList.add(
          'bg-gradient-to-r',
           'from-blue-500',
            'to-purple-600',
            'text-white'
     )
     historyTab.classList.remove(
          'bg-gradient-to-r',
           'from-blue-500',
            'to-purple-600',
            'text-white'
     )
document.getElementById('expense-form').classList.remove('hidden')

})

// History btn 
const assistantTab= document.getElementById("assistant-tab")

  const historyTab= document.getElementById("history-tab")
  historyTab.addEventListener('click',function(){
     // console.log('click')
     historyTab.classList.add(
          'bg-gradient-to-r',
           'from-blue-500',
            'to-purple-600',
            'text-white')
     document.getElementById("assistant-tab").classList.remove(
          'bg-gradient-to-r',
           'from-blue-500',
            'to-purple-600',
            'text-white'
          )
     
document.getElementById('expense-form').classList.add('hidden')
document.getElementById("results").classList.remove('hidden')
document.getElementById('history-section').classList.remove('hidden')
     
})