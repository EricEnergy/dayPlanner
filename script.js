


var workHours = ['9AM' ,'10AM' ,'11AM' ,'12PM' ,'1PM' ,'2PM' ,'3PM' ,'4PM' ,'5PM' ];
workHours.forEach(function(item){
   
    $('.container').append('<hr>');
    $('.container').append('<div class="row">' + `<div class="col-md-2">${item}</div>` + '<input class="col-md-9">' + '<div type="button" class="col-md-1">🔒</div>' +'</div>');
    $('input').attr("id", (item));    
    // for (var i = 0; i < workHours.length; i++){}
});


setInterval(() => {

    var now = moment().format("MMM, Do, h:mm:ss a");
    var nowPlacement = $('#currentDay').text(now);

    if (hour < "11") {

        $('input').attr("class", "col-md-9 info present");

    };
},1000);

var hour = moment().format("h");
$('#whatTimeIsIt').text(hour);
console.log(hour);