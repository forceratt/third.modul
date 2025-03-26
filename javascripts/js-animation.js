console.log("checking");
document.addEventListener("DOMContentLoaded", function () {
  let rusperp = document.getElementById("rusperp");

  rusperp.addEventListener("click", function () {
    rusperp.classList.add("centeredperp");

    setTimeout(() => {
      rusperp.style.display = "none";
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let russin = document.getElementById("russin");

  russin.addEventListener("click", function () {
    russin.classList.add("centeredsin");

    setTimeout(() => {
      russin.style.display = "none";
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let rusgol = document.getElementById("rusgol");

  rusgol.addEventListener("click", function () {
    rusgol.classList.add("centeredgol");

    setTimeout(() => {
      rusgol.style.display = "none";
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let ruszel = document.getElementById("ruszel");

  ruszel.addEventListener("click", function () {
    ruszel.classList.add("centeredzel");

    setTimeout(() => {
      ruszel.style.display = "none";
    }, 1000);
  });
});
function hideElement() {
  document.getElementById("rusbubble").classList.add("hiddenrus");
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pair").addEventListener("click", function () {
    this.classList.add("hiddenpair");
  });
});
