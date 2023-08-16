window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const a = entry.target.querySelector("#pos1");
    const b = entry.target.querySelector("#pos2");
    const c = entry.target.querySelector("#pos3");
    const d = entry.target.querySelector("#neg3");
    const e = entry.target.querySelector("#neg2");
    const f = entry.target.querySelector("#neg1");

    if (entry.isIntersecting) {
      a.classList.add("pos1");
      b.classList.add("pos2");
      c.classList.add("pos3");
      d.classList.add("neg3");
      e.classList.add("neg2");
      f.classList.add("neg1");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    a.classList.remove("pos1");
    b.classList.remove("pos2");
    c.classList.remove("pos3");
    d.classList.remove("neg3");
    e.classList.remove("neg2");
    f.classList.remove("neg1");
  });
});

observer.observe(document.querySelector("#skills-icons"));
