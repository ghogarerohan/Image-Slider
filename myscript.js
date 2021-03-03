var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
      slideIndex = 1;
      alert (slideIndex);
    }
  if (n < 1) {
      slideIndex = x.length;
      alert (slideIndex);
    }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function init() {
  showDivs(slideIndex);
}
