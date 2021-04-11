
let timeDisplay = $("#currentDay");
let saveDay = $(".saveBtn");


function currentWorkDay() {

let rightNow = moment().format("dddd, MMMM Do");
    timeDisplay.text(rightNow);

    for (let i = 9; i < 18; ++i) {
        $("#input" + i).val(localStorage.getItem("hour" + i));
    }

let Hour = moment().format("h");
let amPm = moment().format("a")
if (amPm === "pm") {
    Hour = Hour + 12;
}

let currentHour =  Hour;

for (let i = 9; i < 18; ++i) {
    // let currentBlock = "#" + "hour" + i;
    let currentBlock = i;
    console.log(currentBlock);
    console.log(currentHour)
    if (currentBlock === currentHour) {
        $("#" + "hour" + i).addClass("present");
    }
      
    else if (currentBlock < currentHour) {
        $("#" + "hour" + i).addClass("past");
    }
  
    else if (currentBlock > currentHour) {
        $("#" +"hour" + i).addClass("future");
    }
}
  
}

saveDay.on('click', function() {

    let dayTime = $(this).parent().attr("id");
    let userInput = $(this).siblings(".textarea").val();
    localStorage.setItem(dayTime, userInput);
   
});

currentWorkDay();
























//Need to set up program so that when the user clicks save it saves into local storage
// need to set it up so that the saved events re-appear when user refreshes the 
