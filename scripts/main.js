window.onscroll = function() {scrollFunction(), scrollFunctionWhats()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbarFixa").style.top = "0";
  } else {
    document.getElementById("navbarFixa").style.top = "-100px";
  }
}

function scrollFunctionWhats() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    document.getElementById("whatsFixo").style.display = "none";
  } else {
    document.getElementById("whatsFixo").style.display = "block";
  }
}



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



function burgerFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
