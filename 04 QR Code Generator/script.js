document.querySelector('button').addEventListener("click",(e)=>{
  const text = document.querySelector('#text').value;
  document.querySelector('#displayQr').innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}" alt="QR">`;
})


