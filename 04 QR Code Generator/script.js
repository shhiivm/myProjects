document.querySelector('button').addEventListener("click",(e)=>{

  const text = document.querySelector('#text').value.trim();
  const display = document.querySelector('#displayQr');

  if(!text){
    alert("Please Enter some text");
    return;
  }

  //Adding image loading feature.
    display.innerHTML = `Generating QR Code....`;

    const img = new Image();
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
    img.alt = 'QR Code';
    img.onload = () => {
      document.querySelector('#text').value = '';
      display.innerHTML = '';
      display.appendChild(img);
    }
})


