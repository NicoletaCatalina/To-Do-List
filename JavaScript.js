// Variables
var myNodelist = document.getElementsByTagName("li");
var close = document.getElementsByClassName("close");
var i;

function Clear() {
  var i;
  for ( i = 0; i < myNodelist.length; i++)
  {
    var div = myNodelist[i];
    div.style.display = "none";
  }
}

function newTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("theADDfunction").value;
    //console.log(document.getElementById("theADDfunction").value);
    var t = document.createTextNode(inputValue);
    //console.log(t);

    li.appendChild(t);

    if (inputValue === '') {
      alert("You must write something!");
    } 
    else {
      document.getElementById("myTasks").appendChild(li);
    }

    document.getElementById("theADDfunction").value = "";
    
    //Add the close button
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    //Add the close button function
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    //Add the checked mark
    li.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

var date = document.createElement("P");
var dateValue = document.createTextNode(today);
date.appendChild(dateValue);
document.getElementById("Date").appendChild(date);







