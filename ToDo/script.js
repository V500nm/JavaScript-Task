
var ToDoList = document.getElementsByTagName("LI");
var i;

for (i = 0; i < ToDoList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "Done";
    span.appendChild(txt);
    ToDoList[i].appendChild(span);
}
var Done = document.getElementsByClassName("Done");
var i;

for (i = 0; i < Done.length; i++) {
    Done[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newTask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("First Write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("newTask").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "Done";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < Done.length; i++) {
        Done[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
