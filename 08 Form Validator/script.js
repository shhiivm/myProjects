let get_name = document.querySelector("#name");

let get_id = document.querySelector("#email");

let get_pass = document.querySelector("#password");

let conf_pass = document.querySelector("#confirm-password");

let get_btn = document.querySelector("#btn");

get_btn.addEventListener("click", (e) => {
  e.preventDefault();
  validateName();
});

function validateName() {
  let name = get_name.value;
  if (name === "") {
    alert(`Username can't be empty`);
    return;
  } else if (name.length < 3) {
    alert(`Username must have atlest 3 words`);
    return;
  } else {
    validateEmail();
  }
}

function validateEmail() {
  let mail = get_id.value.trim();

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (mail === "") {
    alert(`Email can't be empty`);
    return;
  } else if (!emailPattern.test(mail)) {
    alert(`Please enter a valid email address`);
    return;
  } else {
    validatePassword();
  }
}

function validatePassword() {
  let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  let pass = get_pass.value;
  if (pass === "") {
    alert(`Password can't be empty`);
    return;
  } else if (!passPattern.test(pass)) {
    alert(
      `Password must be at least 8 characters, include uppercase, lowercase, and a number`
    );
  } else {
    validateConfirmPAssword(pass);
  }
}

function validateConfirmPAssword(pass) {
  this.pass = conf_pass.value;
  if (this.pass !== pass) {
    alert(`Password not is matching`);
    return;
  }
  finalSubmit();
}

function finalSubmit() {
  get_name.value = "";
  get_id.value = "";
  get_pass.value = "";
  conf_pass.value = "";
  document.querySelector("#res").innerHTML = `
    <p style="color:green; font-weight:bold;">✅ Form submitted successfully!</p>
    `;
}
