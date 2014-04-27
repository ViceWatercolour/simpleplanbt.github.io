function showUsername(username, rank, about) {
  for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
    var e = document.getElementsByTagName("li")[i];
    if (e.style == "list-group-item active") {
      e.style = "list-group-item";
    }
    if (e.nodeValue == "\w*" + username + "\w*") {
      e.style = "list-group-item active";
    }
  }
  if (URLExists("https://simpleplanbt.github.io/images/member_photos/" + username + ".png")) {
    document.getElementById("member-photo").innerHTML = "<img src='/images/member_photos/" + username + ".png'>";
    document.getElementById("member-rank").innerHTML = "Rank: " + username.sp;
    document.getElementById("member-about-title").innerHTML = "About: " + username;
    document.getElementById("member-about").innerHTML = about;
  } else {
    document.getElementById("member-photo").innerHTML = "<img src='/images/member_photos/_invalid.png'>";
    document.getElementById("member-rank").innerHTML = "No loaded picture :(";
    document.getElementById("member-about-title").innerHTML = "";
    document.getElementById("member-about").innerHTML = "";
  }
}

function URLExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status != 404;
}