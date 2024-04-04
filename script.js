const recipeChoice = document.getElementById("recipe-choice");
const iframe = document.getElementById("iframe");
const gallery = document.getElementsByClassName("gallery")[0];
const homeBtn = document.getElementById("home");

recipeChoice.addEventListener("change", () => {
  gallery.style = "display: none!important;";
  iframe.style.visibility = "visible";
  iframe.src = recipeChoice.value;
});

homeBtn.addEventListener("click", () => {
  iframe.style.height = "0";
  iframe.style.visibility = "hidden";
  gallery.style.display = "flex";
});

iframe.onload = function () {
  iframe.style.height =
    iframe.contentWindow.document.body.scrollHeight + 100 + "px";
  iframe.style.width = iframe.contentWindow.document.body.scrollWidth + "px";
  //   iframe.style.padding = "2rem;";
};
