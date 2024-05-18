const firstDonateButton = document.querySelector('#first-donate-button');
const secondDonateButton = document.querySelector('#second-donate-button');

const firstDescriptionBox = document.querySelector('#first-description');
const secondDescriptionBox = document.querySelector('#second-description');

firstDonateButton.addEventListener('click', () => {
  firstDescriptionBox.style.display = 'flex';
  secondDescriptionBox.style.display = 'none';
});

secondDonateButton.addEventListener('click', () => {
  firstDescriptionBox.style.display = 'none';
  secondDescriptionBox.style.display = 'flex';
});
