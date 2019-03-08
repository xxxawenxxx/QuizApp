loadQ();
function loadQ() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("root").innerHTML = this.responseText;
    }
  }
  req.open("GET", "data/08-03-2019.json", true);
  req.send();
}
