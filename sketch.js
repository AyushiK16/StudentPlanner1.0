var firstButton;
var bg;
function setup() {
  createCanvas(400,800);
  //createSprite(400, 200, 50, 50);
  firstButton = new Button();
}

function draw() {
  background("black");  
  drawSprites();
  firstButton.display();
}

/*
STRUCTURE OF THE GAME
We will be needing:
- Main Menus:
  =Dashboard - everything for that day
  =To-Do List - Homework + Auto-generated task list
  =Syllabus - all subjects and their individual syllabus + their exam dates
  =Caclulator Page - percentage, 
  =Break Games - games that i will make 
  =Reminders - remind you to complete reminders
- An Animation Guide - guide through the app - cartoon
- Need a database to store the data collected
- Notifications ( reminders for compltetion and submission, etc)
- Search bar - search anything in the app

HLD - high level doc - how the flow will go form one point to another.
Knowledge Base - additional things brilliant students can do ( other than school activites - can learn something on the app itslef
  like programing or maths tricks etc)
Make all the background and buttons
Login and Registeration Pages
Flow from on menu to another 
*/