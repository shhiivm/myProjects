let generated_password = document.getElementById("get-text");

const btn = document.querySelector("#btn");

const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = caps.toLowerCase();
const special = "!@#$%^&*()-_=+|[]{};:/?.>";
const nums = "0123456789";

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let getLength = document.querySelector("#length");
  let passLength = parseInt(getLength.value);

  let allChars = caps + small + nums + special;

  let password = "";
  if (passLength < 8) {
    alert("Password length must be greater than 8");
    document.querySelector("#length").value = "";
    return;
  }
  if (isNaN(passLength)) {
    alert(`Enter Valid input`);
    return;
  }
  password += caps.charAt(Math.floor(Math.random() * caps.length));
  password += small.charAt(Math.floor(Math.random() * small.length));
  password += nums.charAt(Math.floor(Math.random() * nums.length));
  password += special.charAt(Math.floor(Math.random() * special.length));

  while (password.length < passLength) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  generated_password.value = password;
  document.querySelector("#length").value = "";

  copyPassword(password);
  
});


function copyPassword(pass){
  document.querySelector('#copy').addEventListener('click', ()=>{
     navigator.clipboard.writeText(pass)
  })
}