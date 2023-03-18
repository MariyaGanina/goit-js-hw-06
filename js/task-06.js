const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const length = event.target.dataset.length;
  const valueLength = event.target.value.length;

  if (valueLength === Number(length)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
});
