let generated_password = document.getElementById("get-text");

const btn = document.querySelector("#btn");

const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = caps.toLowerCase();
const special = "!@#$%^&*()-_=+|[]{};:/?.>";
const nums = "0123456789";



btn.addEventListener("click", (e) => {
  e.preventDefault();

  let password = "";

  let getLength = document.querySelector("#length");
  let passLength = parseInt(getLength.value);
  
  
  console.log("hello" + passLength);
  while (password.length < passLength) {
    password += caps.charAt(Math.floor(Math.random() * caps.length));
    password += small.charAt(Math.floor(Math.random() * caps.length));
    password += nums.charAt(Math.floor(Math.random() * nums.length));
    password += special.charAt(Math.floor(Math.random() * special.length));
  }

  generated_password.value = password;
});

const arr = new Uint8Array(6);

console.log(crypto.getRandomValues(arr));