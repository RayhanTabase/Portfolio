
document.addEventListener('DOMContentLoaded', function(){
  
  document.getElementById('contact').scrollIntoView()
  m()

  document.querySelector("")

});

function m(){
  const a = document.querySelector("#contact")
  console.log(a)
  a.scrollIntoView({behavior: 'smooth'})
}