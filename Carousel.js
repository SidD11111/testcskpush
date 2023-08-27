const slider = document.querySelector('.carousel__viewport');

const leftArrow1 = document.querySelector('.one');
const rightArrow1 = document.querySelector('.two');

const leftArrow2 = document.querySelector('.three');
const rightArrow2 = document.querySelector('.four');

const leftArrow3 = document.querySelector('.five');
const rightArrow3 = document.querySelector('.six');

const leftArrow4 = document.querySelector('.seven');
const rightArrow4 = document.querySelector('.eight');

let sectionIndex = 0;

leftArrow1.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
})

rightArrow1.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
})

leftArrow2.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
})

rightArrow2.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
})

leftArrow3.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
})

rightArrow3.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
})

leftArrow4.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
})

rightArrow4.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
})