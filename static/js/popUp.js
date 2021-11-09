
const projects = [
  {
  title1:'Multi-Post Stories',
  title2: ' Gain+Glory',
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tags:['Ruby on rails','css','JavScript','html'],
    image:'./static/images/Projects/img-placeholder.png'
  },
  {
    title1:'Tonic',
    title2: ' Gain+Glory',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      tags:['Ruby on rails','css','JavScript','html'],
      image:'./static/images/Projects/img-placeholder.png'
  },
  {
    title1:'Uber Navigation',
    title2: ' Gain+Glory',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      tags:['Ruby on rails','css','JavScript','html'],
      image:'./static/images/Projects/img-placeholder.png'
  },
  {
    title1:'Facebook 360',
    title2: ' Gain+Glory',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      tags:['Ruby on rails','css','JavScript','html'],
      image:'./static/images/Projects/img-placeholder.png'
  }
]




function showPopUp() {
  console.log(projects)
  const popUpSection = document.createElement('div')
  popUpSection.classList.add('fullScreen-popUp')
  document.getElementById('portfolio-popUP').appendChild(popUpSection)
}

document.querySelectorAll(".see_more").forEach((button) => {
  button.addEventListener('click', () => showPopUp())
})


