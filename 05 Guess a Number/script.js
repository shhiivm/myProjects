const btn = document.querySelector("button");

const randNum =  Math.floor(Math.random()*100)+1;

// const attempts = new Array(10);


let totalAttempts = 10;
btn.addEventListener("click", (e) => {

  
  const getData = parseInt(document.querySelector("input").value);

  const result = document.querySelector('#res');
  const attemptsLeft = document.querySelector('#attempts');
  console.log(randNum);


  if(getData === randNum){
    result.innerHTML = '<p> Won RRRrrrrr<p>';
  }else{
    if(totalAttempts <= 0){
      return result.innerHTML = 'You Lost the Game Your attempts are over';
    }
    if(getData > randNum){
        result.innerHTML = `Wrong Answer. Your Guess was high`;

    }
    if(getData < randNum){
      result.innerHTML = `Wrong Answer. Your Guess was less`;
    }
    totalAttempts--;
    attemptsLeft.innerHTML = `Attempts Left : ${totalAttempts}`
  }
  
});
