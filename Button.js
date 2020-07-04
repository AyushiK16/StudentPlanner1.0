class Button {
/*
    constructor() {
      this.dashboardButton = createButton('Dashboard');
      this.reminderButton = createButton('Reminders');
      this.syllabusButton = createButton('Syllabus');
      this.toDoButton = createButton('To-Do List');
      this.breakGames = createButton('Break Games');
      this.title = createElement('h2');
    }
  
    display(){
      this.title.html("Student Planner 1.0");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.dashboardButton.position(76, 500);
      this.reminderButton.position(152, 500);
      this.syllabusButton.position(228, 500);
      this.toDoButton.position(304, 500);
      this.breakGames.position(380, 500);
  
  
      this.dashboardButton.mousePressed(()=>{
        background("pictures/dashboard.png")
        console.log("dash")
      });

      this.toDoButton.mousePressed(()=>{
        background("pictures/toDoList.png")
        console.log("todo")
      });

      this.syllabusButton.mousePressed(()=>{
        background("pictures/syllabus.png")
        console.log("sy")
      });

      this.reminderButton.mousePressed(()=>{
        background("pictures/toDoList.png")
        console.log("rem")
      });

      this.breakGames.mousePressed(()=>{
        background("pictures/breakGames.png")
        console.log("game")
      });
  
    }
  
  }
    /* 