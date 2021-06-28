//Display current date on header
var currentDate = moment().utcOffset("-0400").format("dddd, MMMM Do");
JSON.stringify(currentDate);
currentDate.replace(/"/g,"");
$("#currentDay").html(currentDate);

//Generate Time Array//
var line1 = {
    timeEntry: "time",
    taskEntry: "task",
    id: "9am"
}

//Create Div with split elements (span?) time, task, save button
var createTask = function(taskText, taskDate, taskList) {
    var taskLi = $("<li>").addClass("list-group-item");

    var taskSpan = $("<span>")
        .addClass("tkEntry")
        .text(taskEntry);

    var taskP = $("<p>")
        .addClass("tkInput")
        .text(taskEntry2);
    
    taskLi.append(taskSpan, taskP);

    $("#dateId" + taskList).append(taskLi);
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

tasks.toDo.push({
    text: taskText,
    date: taskDate
});

saveTasks();

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

  
}

//Local Storage Task
$("#buttonID").click(function() {
  //const currButton 
});
//Edit task
//var taskArrItem = taskEntry.setLocalItem();


//Change color of task as per current time
var currentTime = moment().utcOffset("-0400").format("h a");
JSON.stringify(currentTime);
currentTime.replace(/^0+/g,"");
//Not rounding time to nearest hour to allow task completion within the hour
if (currentTime = $("time1").val();
    