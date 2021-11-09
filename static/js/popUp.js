
const projects = {
  0:{
    'title':'Multi-Post Stories <br> Gain+Glory',
    'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    'tags':['Ruby on rails','css','JavScript','html'],
    'image':""

  },
  1:{},
  2:{},
  3:{}
}




function showPopUp() {
  const popUpSection = document.createElement('div')
  popUpSection.classList.add('fullScreen-popUp')
  document.getElementById('portfolio-popUP').appendChild(popUpSection)
}

document.querySelectorAll(".see_more").forEach((button) => {
  button.addEventListener('click', () => showPopUp())
})


