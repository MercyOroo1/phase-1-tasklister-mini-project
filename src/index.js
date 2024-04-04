document.addEventListener("DOMContentLoaded", () => {})
  // your code here
 let form = document.querySelector('form')
 form.addEventListener('submit',(e) => {
  e.preventDefault ()
   buildToDo(e.target.new.value)
   form.reset ()
   
 })

 function buildToDo (to_do) {
  let p = document.createElement("p")
  let btn = document.createElement ("button")
  btn.addEventListener("click",handleDelete)
  btn.textContent=` x`
  p.textContent = `${to_do}  `
  document.querySelector("#tasks").appendChild(p)
  p.appendChild(btn)

 }

 function handleDelete (e){
  e.target.parentNode.remove() 
 }

 


 