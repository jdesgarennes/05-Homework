
//moment function 
var dayClock = document.getElementById('.container');
var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm a"));

var calenderSlots = null;


// function to make all the possibletime slots of the day.
function calenderHours () {
    var slots = [];
    
    new Array(24).fill().forEach((acc, index) => {
      slots.push(moment( {hour: index} ).format('h:mm A'));
      //slots.push(moment({ hour: index }).format('h:mm A'));
    })  
    calenderSlots=slots;
   return calenderSlots;  
  }
calenderHours();
calenderTimes();

// function to create All time of the day, text input boxes, and buttons to save input.
function calenderTimes(){

    for (i=0; i < calenderSlots.length; i++){
      
        var createSlotTime=document.createElement("p");
        var createSlotText=document.createElement("td");
        createSlotTime.setAttribute('id','p'+i);
        createSlotTime.textContent=calenderSlots[i];
        //createSlotText.innerHTML='Click to reserve';
        //calender.appendChild(createSlotTime);
        //calender.appendChild(createSlotText);
        $('#row'+i).text(calenderSlots[i]);
        $('<input>', { type: 'text', id: 'textInput'+i,name: 'textInputs',size: '150', placeholder: 'Enter your calender item text here.....'}).appendTo('#textBox'+i);
        $('<input>',{type: 'button',id: 'submitButton'+i, name: 'submitButton',value: 'SAVE EVENT',class:'saveBtn'}).appendTo('#sButton'+i);
        $('#sButton'+i).click(calData);
        $('#textInput'+i).val(localStorage.getItem('textInput'+ i ));


    }

//function to save data to storage
// regular expressions 
function calData(EVENT){
  // this next line uses regular exprestions that will return a number value only. 
     var index = EVENT.target.id.replace(/\D/g, '');
     var calText = $('#textInput'+ index).val(); 

  console.log(calText);
  console.log(index);
  localStorage.setItem('textInput'+index, calText);
  }


  }
//console.log(slots);
console.log(calenderSlots);



