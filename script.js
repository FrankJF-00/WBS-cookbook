const recipeChoice = document.getElementById("recipe-choice");
const iframe = document.getElementById("iframe");
const gallery = document.getElementsByClassName("gallery")[0];

recipeChoice.addEventListener("change", () => {
  gallery.style = "display: none!important;";
  iframe.src = recipeChoice.value;
});

iframe.onload = function () {
  frame.style.height = frame.contentWindow.document.body.scrollHeight + "px";

  frame.style.width = frame.contentWindow.document.body.scrollWidth + "px";
};
