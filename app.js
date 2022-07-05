var myNodeList = document.getElementsByTagName("LI");
var i;

// add close button to existing tasks
for (i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

// click on a close button to remove items from the current list
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.remove();
  };
}

// set 'checked' class
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// add to do item on enter (no click required)
document.getElementById("item").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key === "Enter") {
    newElement();
  }
  if (event.key === "NumpadEnter") {
    newElement();
  }
});

// add new task
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("item").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("This field cannot be empty");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("item").value = ""; // clear input box

  // add close button to new task
  span = document.createElement("span");
  txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.remove();
    };
  }
}

// delete checked tasks
function deleteBtn() {
  for (i = 0; i < myNodeList.length; i++) {
    if (myNodeList[i].className === "checked") {
      myNodeList[i].remove();
      i--;
    }
  }
}

// remove checks
function removeBtn() {
  for (i = 0; i < myNodeList.length; i++) {
    if (myNodeList[i].className === "checked") {
      myNodeList[i].classList.toggle("checked");
    }
  }
}
