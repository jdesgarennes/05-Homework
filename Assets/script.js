
//moment function 
var dayClock = document.getElementById('.container');
var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm a"));

