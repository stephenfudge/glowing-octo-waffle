// shows current date in day, month, number
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// makes current time, the current time based on moment
var currentTime = moment().hour()


// function to get value of each time block then output the saved local store entry
$(".time-block").each(function () {
    var hour = $(this).attr("id").split("-")[1];

    var userInput = localStorage.getItem(hour);
    var textArea = $(this).find(".description");
    textArea.val(userInput);


    //confirms if timeblocks are before/after/in the current hour
    if (hour < currentTime) {
        $(this).find(".description").addClass("past");
    } else if (hour == currentTime) {
        $(this).find(".description").addClass("present");
    } else {
        $(this).find(".description").addClass("future");
    }
});

// save button function
$(".saveBtn").on("click", function () {
    //which time block to save it to 
    var block = $(this).parent().attr("id").split("-")[1];
    //what to save
    var textEntry = $(this).parent().find(".description").val();
    localStorage.setItem(block, textEntry);
});