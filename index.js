let add = document.getElementById("add");
let text = document.getElementById("RM").value;
let remove = document.getElementById("remove");
let tasks = [];
let li = "<li>" + text + "</li>";
let ll = document.getElementById("Listitems").childNodes;
let ul = document.getElementById("Listitems");

add.onclick = function() {
  var text = document.getElementById("RM").value; 
  var li = "<li>" + text + "</li>";
  tasks.push(li);
  document.getElementById("Listitems").innerHTML += tasks;
  document.getElementById("RM").value = ""; // clear the value
  event.preventDefault(); //prevent refresh
}
ll.onclick = function(){
    ll.style.textDecoration = "line-through";
    event.preventDefault();
}