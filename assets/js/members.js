// Variables
var data = new Array();
var allText = "";
var lines = new Array();
var txtFile = new XMLHttpRequest();
var fileHTTPSurl = "https://simpleplanbt.github.io/members/members.txt";
// Load member data
txtFile.open("GET", fileHTTPSurl, true);
txtFile.onreadystatechange = function() {
  if (txtFile.readyState == 4) {
    if (txtFile.status == 200) { 
      allText = txtFile.responseText; 
      lines = txtFile.responseText.split("\n");
      alert(allText);
    }
  }
  for (var i = 0;  i < lines.length; i++) {
    alert(lines[i]);
    data[i] = lines[i];
  }
}
txtFile.send(null);

function showUsername(username, rank) {
  for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
    var e = document.getElementsByTagName("li")[i];
    if (e.style == "list-group-item active") {
      e.style = "list-group-item";
    }
    if (e.nodeValue == "\w*" + username + "\w*") {
      e.style = "list-group-item active";
    }
  }
  if (contains(data, username.split("\;")[0])) {
    document.getElementById("member-photo").innerHTML = "<img src=images/member_photos/" + username + ".png>";
    document.getElementById("member-rank").innerHTML = "Rank: " + rank;
    document.getElementById("member-about-title").innerHTML = "About: " + username;
  } else {
    document.getElementById("member-photo").innerHTML = "<img src=images/member_photos/_invalid.png>";
    document.getElementById("member-rank").innerHTML = "No Player of this username exists";
    document.getElementById("member-about-title").innerHTML = "";
  }
}

function contains(array, object) {
  var found = false;
  for (var i = 0; i < array.length; i++) {
      if (array[i] == object) {
          found = true;
          break;
        }
    }
    return found;
}