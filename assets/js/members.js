var skinsURL = "http://s3.amazonaws.com/MinecraftSkins/";

function showUsername(username, rank, about) {
  for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
    var e = document.getElementsByTagName("li")[i];
    if (e.className == "list-group-item active") {
      e.className = "list-group-item";
    }
    if (e.innerHTML == username) {
      e.className = "list-group-item active";
    }
  }
  document.getElementById("member-photo").innerHTML = "<img src='" + skinsURL + username + ".png' class='skin'>";
  document.getElementById("member-rank").innerHTML = "Rank: " + rank;
  document.getElementById("member-about-title").innerHTML = "About: " + username;
  document.getElementById("member-about").innerHTML = about;
  renderMCSkins('skin', 3);
}