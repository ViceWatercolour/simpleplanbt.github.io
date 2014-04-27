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
  document.getElementById("member-photo").innerHTML = "<img src='/images/member_photos/" + username + ".png'>";
  document.getElementById("member-rank").innerHTML = "Rank: " + username.sp;
  document.getElementById("member-about-title").innerHTML = "About: " + username;
  document.getElementById("member-about").innerHTML = about;
}