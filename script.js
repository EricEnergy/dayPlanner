var workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM',];
var nonWorkHoursPast = ['6PM', '7PM', '8PM', '9PM', '10PM', '11PM'] // color class past
var nonWorkHoursFuture = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM"] //color class future

var counter = 8;
workHours.forEach(function (item) {
    counter === 12 ? counter = 0 : counter;
    counter++;
    let timeId = counter > 8 && counter < 12 ? counter + "AM" : counter + "PM";
    let buttonId = counter;

    $('.container').append('<hr><div class="row">' + `<div class="col-md-2">${item}</div>` + '<input id="' + timeId + '" class="col-md-9">' + '<div id="' + buttonId + '"  type="button" class="col-md-1">🔒</div>' + '</div>');

});

for (var i = 0; i < workHours.length; i++){
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    $("#" + key).val(value);

    console.log(key);
    console.log(value);
  

}

setInterval(() => {

    var now = moment().format("MMM, Do, h:mm:ss a");
    $('#currentDay').text(now);

    
    if (nonWorkHoursPast.indexOf(hour) >= 0) {

        $("input").attr("class", "col-md-9 past");

    } 
    if (nonWorkHoursFuture.indexOf(hour) >= 0) {

        $("input").attr("class", "col-md-9 future");

    } 
    if (workHours.indexOf(hour) >= 0) {

        if (hour === "9am")
        $("#9AM").attr("class", "col-md-9 past");
        $("#10AM").attr("class", "col-md-9 future");
        $("#11AM").attr("class", "col-md-9 past");
        console.log("broken")
    } 




    

    // if (hour === nonWorkHoursPast) {

    //     $("input").attr("class", "col-md-9 past");
    // };


    // if (hour = workHours) {

    //     if (hour > workHours) {

    //         $("input").attr("class", "col-md-9 future");
    //         console.log("here");
    //     };


    // };


}, 1000);


var inputInfo9AM = $('#9AM');
var inputInfo10AM = $('#10AM');
var inputInfo11AM = $('#11AM');
var inputInfo12PM= $('#12PM');
var inputInfo1PM = $('#1PM');
var inputInfo2PM = $('#2PM');
var inputInfo3PM = $('#3PM');
var inputInfo4PM = $('#4PM');
var inputInfo5PM = $('#5PM');


$("#9").click(function () {
    var keyName = inputInfo9AM.attr('id');
    var valueInput = inputInfo9AM.val();
    localStorage.setItem(keyName, valueInput);

});


$("#10").click(function () {
    var keyName = inputInfo10AM.attr('id');
    var valueInput = inputInfo10AM.val();
    localStorage.setItem(keyName, valueInput);

});

$("#11").click(function () {
    var keyName = inputInfo11AM.attr('id');
    var valueInput = inputInfo11AM.val();
    localStorage.setItem(keyName, valueInput);

});

$("#12").click(function () {
    var keyName = inputInfo12PM.attr('id');
    var valueInput = inputInfo12PM.val();
    localStorage.setItem(keyName, valueInput);

});

$("#1").click(function () {
    var keyName = inputInfo1PM.attr('id');
    var valueInput = inputInfo1PM.val();
    localStorage.setItem(keyName, valueInput);

});

$("#2").click(function () {
    var keyName = inputInfo2PM.attr('id');
    var valueInput = inputInfo2PM.val();
    localStorage.setItem(keyName, valueInput);

});

$("#3").click(function () {
    var keyName = inputInfo3PM.attr('id');
    var valueInput = inputInfo3PM.val();
    localStorage.setItem(keyName, valueInput);

});

$("#4").click(function () {
    var keyName = inputInfo4PM.attr('id');
    var valueInput =  inputInfo4PM.val();
    localStorage.setItem(keyName, valueInput);

});

$("#5").click(function () {
    var keyName = inputInfo5PM.attr('id');
    var valueInput = inputInfo5PM.val();
    localStorage.setItem(keyName, valueInput);

});
var hour = "9AM";
// var hour = moment().format("ha");
$('#whatTimeIsIt').text(hour);
console.log(hour);

