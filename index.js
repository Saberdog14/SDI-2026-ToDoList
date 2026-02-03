
document.getElementById("add").onclick = function() {
  var text = document.getElementById("RM").value; 
  var li = "<li>" + text + "</li>";
  document.getElementById("Listitems").innerHTML += li;
  document.getElementById("RM").value = ""; // clear the value
  event.preventDefault(); //prevent refresh
}

