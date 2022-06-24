  function toggle() {
    var remember = document.getElementById("tgbtn");
    if (remember.checked) {
      document.getElementById("list").style.visibility = "visible";
      document.getElementById("list").style.opacity = "1";
    } else {
      document.getElementById("list").style.visibility = "collapse";
      document.getElementById("list").style.opacity = "0";
    }
  }