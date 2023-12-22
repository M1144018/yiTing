const balloonContainer = document.getElementById("balloon-container");
const div_error = document.getElementById("error-layer");
const div_success = document.getElementById("success-layer");
const div_input = document.getElementById("input-layer");

const img_start = document.getElementById("startImg")
const img_final = document.getElementById("finalImg")

const p_errorMessage = document.getElementById("errorMessage")
const p_errorTopic = document.getElementById("errorTopic")

const ipt_answer = document.getElementById("ipt_answer");
const btn_sendAns =document.getElementById("sendAns");

const answer=["A","B","B","B","C","A","A","C","B"]
let errorMessageList=["❤️加油~~~快全對了!!❤️","❤️加油~~~快全對了!!❤️","怡庭怎麼可以只對一半!!(ᗒᗣᗕ)","紹宇心態沒了(T⌓T)","愛會消失(｡•́︿•̀｡)"]
let ImageList=[
  ["src/41.jpg","src/42.jpg","src/43.jpg","src/44.jpg","src/45.jpg","src/46.jpg","src/47.jpg","src/48.jpg","src/49.jpg","src/50.jpg",
  "src/51.jpg","src/52.jpg","src/53.jpg","src/54.jpg","src/55.jpg","src/56.jpg","src/57.jpg","src/58.jpg","src/59.jpg","src/60.jpg",
  "src/61.jpg","src/62.jpg","src/63.jpg","src/64.jpg","src/65.jpg","src/66.jpg","src/67.jpg","src/68.jpg","src/69.jpg","src/70.jpg",
  "src/71.jpg","src/72.jpg","src/73.jpg","src/74.jpg","src/75.jpg","src/76.jpg","src/77.jpg"],//合照的
  ["src/31.jpg","src/32.jpg","src/33.jpg","src/34.jpg","src/35.jpg","src/36.jpg","src/37.jpg","src/38.jpg","src/39.jpg","src/40.jpg"], // 開心的
  ["src/11.jpg","src/12.jpg","src/13.jpg","src/14.jpg","src/15.jpg","src/16.jpg","src/17.jpg","src/18.jpg"], // 一般的
  ["src/1.jpg","src/2.jpg","src/3.jpg","src/4.jpg","src/5.jpg","src/6.jpg","src/7.jpg","src/8.jpg","src/9.jpg","src/10.jpg"]//拍壞的
]
let correctImageList=[]


let tempDiv;

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(10) + 5;
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
  tempDiv=document.createElement("div");
  imgLen=ImageList[src].length
  console.log(imgLen);
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("img");
    balloon.className = "balloon";
    balloon.src=ImageList[src][random(imgLen)];
    balloon.style.cssText = getRandomStyles();
    tempDiv.append(balloon);
  }
  balloonContainer.append(tempDiv);
}

function removeBalloons() {
  tempDiv.style.opacity = 0;
  setTimeout(() => {
    tempDiv.remove();
  }, 500)
}
btn_sendAns.addEventListener("click",() =>{
  if(ipt_answer.value.length!=9){
    alert("只能輸9個答案辣~~~")
  }
  else{
    let upperCase=ipt_answer.value.toUpperCase()
    let getAnswer=upperCase.split("");
    var errorCount=0;
    var errorString="";
    for (var i=0;i<9;i++){
        if(getAnswer[i]!=answer[i]){
          errorCount+=1;
          errorString+="第 "+(i+1)+" 題  "
        }
    }
    if(errorCount!=0){
    
      p_errorMessage.innerText=errorMessageList[parseInt(errorCount/2,10)]

      p_errorTopic.innerText=errorString

      div_error.hidden=false;
      div_input.hidden=true;
      console.log(parseInt(Math.ceil(errorCount/3,10)))
      createBalloons(30,parseInt(Math.ceil(errorCount/3,10)))
      setTimeout(function(){
        div_error.hidden=true;
        div_input.hidden=false;
        removeBalloons()
      },6000+500*errorCount)
      
    }
    else{
      createBalloons(50,0)
      img_final.hidden=false;
      setTimeout(function(){
        img_final.hidden=true;
        div_success.hidden=false; 
        div_input.hidden=true;
      },12000)
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
