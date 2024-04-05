const portions = document.getElementById("portions");
const incredients = document.getElementsByClassName("incredients");
let currentPortions = portions.value;

portions.addEventListener("change", () => {
  for (let x of incredients) {
    let text = x.innerText;
    x.innerText = (text / currentPortions) * portions.value;
  }
    currentPortions = portions.value;
  }

});
