const balloonContainer = document.getElementById("balloon-container");
const div_error = document.getElementById("error-layer");
const div_success = document.getElementById("error-layer");
const div_input = document.getElementById("input-layer");

const img_start = document.getElementById("startImg")
const p_errorMessage = document.getElementById("errorMessage")
const p_errorTopic = document.getElementById("errorTopic")

const ipt_answer = document.getElementById("ipt_answer");
const btn_sendAns =document.getElementById("sendAns");


function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
  `;
}

// function createBalloons(num) {
//   for (var i = num; i > 0; i--) {
//     var balloon = document.createElement("div");
//     balloon.className = "balloon";
//     balloon.style.cssText = getRandomStyles();
//     balloonContainer.append(balloon);
//   }
// }

function createBalloons(num,src) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("img");
    balloon.className = "balloon";
    balloon.src=src;
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}
btn_sendAns.addEventListener("click",() =>{
  if(ipt_answer.value.length!=9){
    alert("QQQQ")
  }
  else{
    const answer=["A","B","B","B","C","A","A","C","B"]
    let getAnswer=ipt_answer.value.split("");
    var errorCount=0;
    var errorString="";
    for (var i=0;i<9;i++){
        if(getAnswer[i]!=answer[i]){
          errorCount+=1;
          errorString+="第 "+(i+1)+" 題 "
        }
    }
    if(errorCount!=0){
      p_errorMessage.innerText="嚎啕嗚嗚嗚嗚嗚嗚"
      p_errorTopic.innerText=errorString
      div_error.hidden=false;
      div_input.hidden=true;
      createBalloons(30,'src/1.png')
      setTimeout(function(){
        div_error.hidden=true;
        div_input.hidden=false;
        removeBalloons()
      },1000*errorCount)
      
    }
    
  }
 
});



window.addEventListener("load", () => {
    img_start.hidden=false;
    setTimeout(function(){
      img_start.hidden=true;
    },4000)
   // createBalloons(30)
});

balloonContainer.addEventListener("click", () => {
  // removeBalloons();
   
});
