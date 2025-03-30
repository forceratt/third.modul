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

document.addEventListener("DOMContentLoaded", function () {
  let pairs = {};

  document.querySelectorAll(".box").forEach((box) => {
    let pairId = box.dataset.pair;
    if (!pairs[pairId]) {
      pairs[pairId] = {
        elements: [],
        clicked: [false, false],
        isPaired: false,
      };
    }
    pairs[pairId].elements.push(box);
  });

  function checkMove(pair) {
    if (pair.clicked[0] && pair.clicked[1]) {
      pair.elements.forEach((box, index) => {
        box.style.top = box.dataset.targetY;
        box.style.left = box.dataset.targetX;
      });

      pair.isPaired = true;
    }
  }

  function resetMove(pair) {
    pair.elements.forEach((box) => {
      box.style.top = box.dataset.originalTop;
      box.style.left = box.dataset.originalLeft;
    });

    pair.clicked = [false, false];
    pair.isPaired = false;
  }

  Object.values(pairs).forEach((pair) => {
    pair.elements.forEach((box) => {
      box.dataset.originalTop = box.style.top;
      box.dataset.originalLeft = box.style.left;
    });

    pair.elements[0].addEventListener("click", function () {
      if (pair.isPaired) {
        resetMove(pair);
      } else {
        pair.clicked[0] = true;
        checkMove(pair);
      }
    });

    pair.elements[1].addEventListener("click", function () {
      if (pair.isPaired) {
        resetMove(pair);
      } else {
        pair.clicked[1] = true;
        checkMove(pair);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("treasure").addEventListener("click", function () {
    this.classList.add("hiddenpair");
  });
});

const smallObjects = document.querySelectorAll(".small");
const sundukbig = document.getElementById("sundukbig");

// Размеры маленьких объектов в vw/vh
const objWidthVW = 5; // 5vw (примерно 50px на 1000px экране)
const objHeightVH = 5; // 5vh

// Получаем размеры большого объекта в vw/vh + безопасную зону (2vw)
function getsundukbigRect() {
  const rect = sundukbig.getBoundingClientRect();
  const vw = window.innerWidth / 100;
  const vh = window.innerHeight / 100;

  return {
    left: rect.left / vw - 2, // Преобразуем px → vw и добавляем запас
    right: rect.right / vw + 2,
    top: rect.top / vh - 2,
    bottom: rect.bottom / vh + 2,
  };
}

// Проверяем, не пересекаются ли маленькие объекты с большим
function isOverlapping(x, y, objWidth, objHeight, bigRect) {
  return !(
    (
      x + objWidth < bigRect.left || // Маленький объект полностью левее большого
      x > bigRect.right || // Маленький объект полностью правее большого
      y + objHeight < bigRect.top || // Маленький объект полностью выше большого
      y > bigRect.bottom
    ) // Маленький объект полностью ниже большого
  );
}

// Разбрасываем объекты случайно по экрану, избегая большого объекта
function randomizePositions() {
  const bigRect = getsundukbigRect();

  smallObjects.forEach((obj) => {
    let x, y;
    let attempts = 0; // Ограничение попыток генерации координат
    const maxAttempts = 100;

    do {
      x = Math.random() * (100 - objWidthVW); // Координаты в vw
      y = Math.random() * (100 - objHeightVH); // Координаты в vh
      attempts++;
    } while (
      isOverlapping(x, y, objWidthVW, objHeightVH, bigRect) &&
      attempts < maxAttempts
    );

    obj.style.left = `${x}vw`;
    obj.style.top = `${y}vh`;
  });
}

window.onload = randomizePositions;

smallObjects.forEach((obj) => {
  obj.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", obj.id);
  });
});

sundukbig.addEventListener("dragover", (e) => {
  e.preventDefault();
});

sundukbig.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(id);
  if (draggedElement) {
    draggedElement.remove(); // Удаляем объект при переносе
  }
});
