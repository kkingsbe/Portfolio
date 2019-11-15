//Allows the user to click the images to link to the site. Probably a much better way out there to do this
[...document.querySelectorAll(".gallery-image")].forEach(element => {
  let url = element.parentNode.getElementsByClassName("gallery-title")[0].getElementsByTagName("a")[0].getAttribute("href");
  element.onclick = function() {
    window.location.replace(url);
  }
})