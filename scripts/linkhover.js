// Define your color palette
const colors = [
  "#d14d41",
  "#da702c",
  "#d0a215",
  "#879a39",
  "#3aa99f",
  "#4385be",
  "#8b7ec8",
  "#ce5d97",
];

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.color = randomColor;
  });

  link.addEventListener("mouseleave", function () {
    this.style.color = "";
  });
});
