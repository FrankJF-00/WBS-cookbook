const recipeChoice = document.getElementById("recipe-choice");
const iframe = document.getElementById("iframe");
const gallery = document.getElementsByClassName("gallery")[0];

recipeChoice.addEventListener("change", () => {
  gallery.style = "display: none!important;";
  //   iframe.style.display = "flex";
  iframe.src = recipeChoice.value;
});

iframe.onload = function () {
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  iframe.style.width = iframe.contentWindow.document.body.scrollWidth + "px";
  //   iframe.style.padding = "2rem;";
};
