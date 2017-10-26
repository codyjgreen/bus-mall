'use strict';

//Array of images pushed to from item

var itemArray = [];
var lastIndex = [];
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
