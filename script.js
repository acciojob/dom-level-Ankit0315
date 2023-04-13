//your JS code here. If required.
var c = document.getElementbyId('level').value;

var level = 0;
while (c.parentNode) {
  level++;
  c = c.parentNode;
}
alert("DOM level of #level:",level);
