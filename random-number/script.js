const a = document.getElementById("button1")
const b = document.getElementById("label1")
let generatedNum
const min = 1
const max = 1000
a.onclick = function(){
  generatedNum = Math.floor(Math.random() * max) + min
  b.textContent = generatedNum
  console.log(generatedNum)
}
const c = document.getElementById("button3")
const d = document.getElementById("label2")
c.onclick = function(){
  generatedNum = Math.random() * max + min
  d.textContent = generatedNum
  console.log(generatedNum)
}
const e = document.getElementById("button2")
const f = document.getElementById("button4")
e.onclick = function(){
  generatedNum = 0
  b.textContent = generatedNum
}
f.onclick = function(){
  generatedNum = 0
  d.textContent = generatedNum
}