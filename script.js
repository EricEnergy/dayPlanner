var date = '11-14-2019';
var format = 'LLLL';
var result = moment(date).format(format);
console.log(result);
$('#currentDay').text(date);

var workHours = ['9AM' ,'10AM' ,'11AM' ,'12PM' ,'1PM' ,'2PM' ,'3PM' ,'4PM' ,'5PM' ];

workHours.forEach(function(item, index, array){

    var HR = $(".container").append("<hr>");
    var rowMaker = $(".container").append("<div class=row>");
    var i = 0;

    i++;
    $(".row").append(item);


    console.log(item);
    console.log(index);
    console.log(array);
});

// 2 6 2

//col-md-6