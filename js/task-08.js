const loginForm = document.querySelector(`.login-form`);

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const elementEmail = loginForm.elements.email;
  const elementPassword = loginForm.elements.password;

  if (!elementEmail.value || !elementPassword.value) {
    return alert("Attention! All fields must be filled!");
  }

  const formData = {
    email: elementEmail.value,
    password: elementPassword.value,
  };

  console.log(formData);

  loginForm.reset();
});
