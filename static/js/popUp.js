import projects from './projectsList.js';

export default function showPopUp(id) {
  const popUpSection = document.createElement('section');
  popUpSection.id = 'fullScreen-popUp';
  const fullScreenCard = document.createElement('div');
  fullScreenCard.className = 'fullScreen-card';
  fullScreenCard.innerHTML += `
    <div id="closePopUp">
      <button type="button" class="button-clear"><img src="./static/images/Buttons/close.png" alt="close menu image"></button>
    </div>
    <h2 class="title">${projects[id].title}</h2>
    <img class="fullScreenPopUp-image" src=${projects[id].image} alt="${projects[id].title1} image"/>
    <ul class="tags">
      ${
  projects[id].tags.map((tag) => (`<li class="tag">${tag}</li>`)).join('')
}
    </ul>
    <p>${projects[id].description}</p>
    <div class="button-container">
      <button class="button-primary" type="button">See Live <img src="./static/images/Buttons/seeLive.png" alt="live version image"></button>
      <button class="button-primary" type="button">See Source <img src="./static/images/Buttons/github.png" alt="github image"> </button>
    </div>
  `;
  popUpSection.appendChild(fullScreenCard);
  document.getElementById('portfolio-popUP').appendChild(popUpSection);
  document.querySelector('#closePopUp').addEventListener('click', () => popUpSection.remove());
}
