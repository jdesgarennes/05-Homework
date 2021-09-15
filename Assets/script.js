
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

    for (i=0; i <= calenderSlots.length; i++){
       
        var createSlotTime=document.createElement("p");
        var createSlotText=document.createElement("td");
        createSlotTime.setAttribute('id','p'+i);
        createSlotTime.textContent=calenderSlots[i];
        //createSlotText.innerHTML='Click to reserve';
        //calender.appendChild(createSlotTime);
        //calender.appendChild(createSlotText);
        $('#row'+i).text(calenderSlots[i]);
        $('<input>', { type: 'text', id: 'textInput',name: 'textInput',size: '100'}).appendTo('#textBox'+i);
        $('<input>',{type: 'button',id: 'submitButton', name: 'submitButton',value: 'SAVE EVENT'}).appendTo('#sButton'+i);
        $('<button>').addClass('.saveBtn');
        //$('#submitButton'+1).addClass('.saveBtn');
        //$('#sButton'+i).click(calData);
      
    }
  }
//console.log(slots);
console.log(calenderSlots);


//textbox
//$("<input>", { type: "text", id: "text" + i ,size: "20"}).appendTo("#textbox"+i);

//$("<div/>", { id: "hour" + i, class: "hour" }).appendTo("#day");

//$("#saveButton" + i).click(setData);




function calData(){


}