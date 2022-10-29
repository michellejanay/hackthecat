const clicker = document.getElementById("clicker");
const clicker2 = document.getElementById("clicker-pg-2");
const img = document.getElementById("carousel");
const catImgs = document.getElementById("cat-imgs");

// clicker.addEventListener("click", () => {
//   //catImgs.location.reload();
//   clicker.style.display = "none";
//   clicker2.style.display = "flex";
// });

// clicker2.addEventListener("click", () => {
//   const catImgs = document.getElementById("cat-imgs");
//   const content = "https://cataas.com/cat/gif";
//   catImgs.src = "";
//   catImgs.src = content;
// });

// console.log(clicker.src);
clicker2.addEventListener("click", () => {
  window.location.reload();
});
