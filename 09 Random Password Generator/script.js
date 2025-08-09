const generated_password = document.getElementById("get-text");

const btn = document.querySelector("#btn");

const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = caps.toLowerCase();
const special = "!@#$%^&*()-_=+|[]{};:/?.>";
const nums = "0123456789";

let password = "";

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let getLength = document.querySelector("#length");
  let passLength = parseInt(getLength.value);
  // console.log(passLength);
  console.log("hello" + passLength);
  while (password.length < passLength) {
    password += caps.charAt(Math.floor(Math.random() * caps.length));
    password += small.charAt(Math.floor(Math.random() * caps.length));
    password += nums.charAt(Math.floor(Math.random() * nums.length));
    password += special.charAt(Math.floor(Math.random() * special.length));
  }

  console.log(password);
});
