'use strict';

//Array of images pushed to from item

var itemArray = [];
var nameArray = [];
var lastIndex = [];
var totalClicks = [];
var viewResultsButton = document.createElement('button');
var canvas = document.getElementById('myChart');
//variable to end the survey after 25 clicks
var surveyLength = 0;

// event listener
var userClick = document.getElementById('pictures');

//html element getters
var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');

function Item (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.clicks = 0;
  this.timesDisplayed = 0;
  itemArray.push(this);
  nameArray.push(this.imageName);
}

//items

new Item ('R2D2 Bag', 'img/bag.jpg');
new Item ('Banana Slicer', 'img/banana.jpg');
new Item ('Ipad Stand', 'img/bathroom.jpg');
new Item ('Open-toed Boots', 'img/boots.jpg');
new Item ('All in One Toaster', 'img/breakfast.jpg');
new Item ('Meatball Gum', 'img/bubblegum.jpg');
new Item ('Chair', 'img/chair.jpg');
new Item ('Cthulhu', 'img/Cthulhu.jpg');
new Item ('Duckie Bill', 'img/dog-duck.jpg');
new Item ('Dragon Meat', 'img/dragon.jpg');
new Item ('Utencil Pen Caps', 'img/pen.jpg');
new Item ('Pet Sweeper', 'img/pet-sweep.jpg');
new Item ('Pizza Scissors', 'img/scissors.jpg');
new Item ('Shark Sleeper', 'img/shark.jpg');
new Item ('Baby Sweeper', 'img/sweep.jpg');
new Item ('Tauntaun Sleeper', 'img/tauntaun.jpg');
new Item ('Unicorn Meat', 'img/unicorn.jpg');
new Item ('Tentacle USB', 'img/usb.gif');
new Item ('Watering Can', 'img/water-can.jpg');
new Item ('Wine Glass', 'img/wine-glass.jpg');

var randomIndex1 = Math.floor(Math.random() * itemArray.length);
var randomIndex2 = Math.floor(Math.random() * itemArray.length);
var randomIndex3 = Math.floor(Math.random() * itemArray.length);

//function to end the survey
function surveyEnd() {
  viewResultsButton.textContent = 'View Results';
  pictures.appendChild(viewResultsButton);
  pictures.removeEventListener('click', handleUserClick);
  for (var i = 0; i < itemArray.length; i++) {
    totalClicks.push(itemArray[i].clicks);
  };
};

// function surveyEnd() {
//   userClick.removeEventListener('click', handleUserClick);
//   var list = document.createElement('ul');
//   list.textContent = 'Results';
//   userClick.appendChild(list);
//   for (var i = 0; i < itemArray.length; i++) {
//     var listEL = document.createElement('li');
//     listEL.textContent = '(' + itemArray[i].clicks + '   ' + ' votes ' + ') ' + ' for the ' + ' ' + itemArray[i].imageName + ' ' + ' ( ' + itemArray[i].filePath + ' )';
//     list.appendChild(listEL);
//   }
// }

//function to load images to page

function images() {
  if (surveyLength > 24) {
    surveyEnd();
  }
  lastIndex = [];

  lastIndex.push(randomIndex1);
  lastIndex.push(randomIndex2);
  lastIndex.push(randomIndex3);

  //reassigning the variables foreach picture
  randomIndex1 = Math.floor(Math.random() * itemArray.length);
  randomIndex2 = Math.floor(Math.random() * itemArray.length);
  randomIndex3 = Math.floor(Math.random() * itemArray.length);

  //while loop to stop items doubling up or diplaying right after another

  while (randomIndex1 === lastIndex[0] || randomIndex1 === lastIndex[1] || randomIndex1 === lastIndex[2] || randomIndex2 === lastIndex[0] || randomIndex2 === lastIndex[1] || randomIndex2 === lastIndex[2] || randomIndex3 === lastIndex[0] || randomIndex3 === lastIndex[1] || randomIndex3 === lastIndex[2] || randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex2 === randomIndex3) {

    randomIndex1 = Math.floor(Math.random() * itemArray.length);
    randomIndex2 = Math.floor(Math.random() * itemArray.length);
    randomIndex3 = Math.floor(Math.random() * itemArray.length);
  }

  //image sources
  leftImg.src = itemArray[randomIndex1].filePath;
  centerImg.src = itemArray[randomIndex2].filePath;
  rightImg.src = itemArray[randomIndex3].filePath;

  //adds 1 to times displayed for each object

  itemArray[randomIndex1].timesDisplayed += 1;
  itemArray[randomIndex2].timesDisplayed += 1;
  itemArray[randomIndex3].timesDisplayed += 1;

}

function handleUserClick(event) {
  event.preventDefault();

  if (event.target.id === 'left') {
    itemArray[randomIndex1].clicks += 1;
  }

  else if (event.target.id === 'center') {
    itemArray[randomIndex2].clicks += 1;
  }

  else if (event.target.id === 'right') {
    itemArray[randomIndex3].clicks += 1;
  }

  else {
    alert(' Pick an Item! ');
  }
  console.log('I Clicked ' + event.target.id);
  console.log('Guess # ' + surveyLength);
  surveyLength += 1;

  images();
}
var data = {
  //Labels = imageName from each image object
  labels: nameArray,
  datasets: [
    {
      label: 'Product Chosen',
      backgroundColor: [
        'rgba(230, 25, 75, 0.2)',
        'rgba(60, 180, 75, 0.2)',
        'rgba(255, 225, 25, 0.2)',
        'rgba(0, 130, 200, 0.2)',
        'rgba(245, 130, 48, 0.2)',
        'rgba(145, 30, 180, 0.2)',
        'rgba(70, 240, 240, 0.2)',
        'rgba(240, 50, 230, 0.2)',
        'rgba(210, 245, 60, 0.2)',
        'rgba(250, 190, 190, 0.2)',
        'rgba(0, 128, 128, 0.2)',
        'rgba(230, 190, 255, 0.2)',
        'rgba(170, 110, 40, 0.2)',
        'rgba(255, 250, 200, 0.2)',
        'rgba(128, 0, 0, 0.2)',
        'rgba(170, 255, 195, 0.2)',
        'rgba(128, 128, 0, 0.2)',
        'rgba(255, 215, 180, 0.2)',
        'rgba(0, 0, 128, 0.2)',
        'rgba(128, 128, 128, 0.2)',

      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'

      ],
      borderWidth: 1,
      data: totalClicks,
    },
  ]
};

//Function to Draw Chart
function drawChart() {
  var ctx = canvas.getContext('2d');
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}
images();

pictures.addEventListener('click', handleUserClick);
viewResultsButton.addEventListener('click', drawChart);
