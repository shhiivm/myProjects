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
  let mail = get_id.value;
  if (mail === "") {
    alert(`Email can't be empty`);
    return;
  } else {
    validatePassword();
  }
}

function validatePassword() {
  let pass = get_pass.value;
  if (pass === "") {
    alert(`Password can't be empty`);
    return;
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
  // let para = document.createElement("p");
  // para.innerHTML = `<p>Form Submitted Sucessfully`;

  // document.querySelector("#res").appendChild(p);
  get_name.value = "";
  get_id.value = "";
  get_pass.value = "";
  conf_pass.value = "";
}
