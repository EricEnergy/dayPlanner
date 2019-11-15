
var workHours = ['9AM' ,'10AM' ,'11AM' ,'12PM' ,'1PM' ,'2PM' ,'3PM' ,'4PM' ,'5PM' ];
workHours.forEach(function(item){

    $('.container').append('<hr>');
    $('.container').append('<div class="row">' + `<div class="col-md-2">${item}</div>` + '<input class="col-md-9 info">' + '<div class="col-md-1">0</div>' +'</div>');
});


// 2 6 2

//col-md-6


