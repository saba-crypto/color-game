let secretColor = null;
function generateRandomColor() {
  return {
    red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256),
  };
}

const colorTextElement = document.querySelector(".color-text");
document.querySelectorAll(".difficulty-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.mode;
    if (!mode) {
      alert("unexpected error occurred");
      return;
    }
    let secretColor = generateRandomColor();
    colorTextElement.innerHTML = `color: rgb(${secretColor.red}, ${secretColor.green}, ${secretColor.blue})`;
    if (mode === "easy") {
      generateCards(3, secretColor);
    } else if (mode === "medium") {
      generateCards(6, secretColor);
    } else if (mode === "hard") {
      generateCards(9, secretColor);
    }
  });
});

document.querySelectorAll(".color-card").forEach((card) => {
  card.addEventListener("click", () => {
    console.log(card);
  });
});

function generateCards(count, secretColor) {
  const cardsGridElement = document.querySelector(".color-cards");
  let html = [];
  if (!count) {
    return;
  }

  for (let i = 1; i <= count; i++) {
    const randomColor = generateRandomColor();
    html.push(`
            <div style="background-color: rgb(${randomColor.red}, ${randomColor.green}, ${randomColor.blue});" class="color-card"></div>
        `);
  }
  let secretColorElement = `<div style="background-color: rgb(${secretColor.red}, ${secretColor.green}, ${secretColor.blue});" class="color-card"></div>`;
  const randomIndex = Math.floor(Math.random() * html.length);
  html[randomIndex] = secretColorElement;
  cardsGridElement.innerHTML = html.join("");
}
