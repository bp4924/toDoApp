var myNodeList = document.getElementsByTagName('LI');
var i;

for (i=0; i<myNodeList.length; i++) {
  var span = document.createElement('span');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
};

// click on a close button to hide items on the current list
var close = document.getElementsByClassName('close');
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = 'none' // DOES NOT DELETE ITEM!!
  };
};

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle("checked");
  };
}, false);

// add todo item on enter (no click required)
document.getElementById('item').addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.key === 'Enter') {
    newElement();
  };
  if (event.key === 'NumpadEnter') {
    newElement();
  };
});

function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('item').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert ('This field cannot be empty');
  } else {
    document.getElementById('list').appendChild(li);
  };

  document.getElementById('item').value = ''; // clear input box

  span = document.createElement('span');
  txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++ ) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = 'none'; 
    };
  };
};

// Delete items
function deleteBtn() {
  var del = document.getElementById('list');
  
  for (i=0;i<myNodeList.length;i++) {
    if (myNodeList[i].classList == "checked") {
      myNodeList[i].style.display = 'none'
      myNodeList[i].classList.toggle("checked");
    };
  };
  console.log(del);
};

// remove checks
function removeBtn() {
  var rem = document.getElementById('list');
  console.log(rem);
  for (i=0;i<myNodeList.length;i++) {
    if (myNodeList[i].className == "checked") {
      myNodeList[i].classList.toggle("checked");
    };
  };
  console.log(rem);  
};
