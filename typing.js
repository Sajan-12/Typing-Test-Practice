//step1

const sentence=document.getElementById("showSentence");
const textarea=document.getElementById("textarea");
const btn=document.getElementById("btn");
const score=document.getElementById("score");
let startTime;
let endTime;
let matchIndex;
let accuracy;
const sentences=['Ram eats a mango','I am going to school and  Radha is going to home',
  'I am going to market and after some time I will return to home'];

function calculateAccuracy(typedText){
   const actualsentence=sentences[matchIndex];
   const typedsentence=typedText;
   let count=0;
   for(let i=0;i<typedsentence.length;i++){
   if(typedsentence[i]===actualsentence[i])
   count++;
   } 
   accuracy=Math.round((count/typedsentence.length)*100).toFixed(2);
  }
  //step5
  function calculateTypingSpeed(){
    const totalTimeTaken=(endTime-startTime)/1000;
    const typedWord=textarea.value;
    if(typedWord===""){
      score.textContent=`your typing speed is 0 wpm and you have typed total 0
      letter with accuracy: 0 %`;
      return;
    }
    calculateAccuracy(typedWord);
    const actualWord=typedWord.trim().split(" ").length;
    const speed=Math.round((actualWord/totalTimeTaken)*60);
    score.textContent=`your typing speed is ${speed} wpm and you have typed total ${typedWord.length}
    letters with accuracy: ${accuracy} %`;
}
  //step4
function endTyping(){

  const date=new Date();
 endTime=date.getTime();
 btn.textContent='start';

 calculateTypingSpeed();
 sentence.innerHTML="";
textarea.value=""; 

}

//step3
function startTyping(){
  let randomIndex=Math.floor(Math.random()*sentences.length);
  matchIndex=randomIndex;
  sentence.textContent=sentences[randomIndex];
  const date=new Date();
  startTime=date.getTime();
 btn.textContent='Done';
 }
//step2
btn.addEventListener('click',()=>{
  switch(btn.textContent.toLowerCase()){
    case 'start':
      score.textContent="";
      textarea.removeAttribute('disabled');
      startTyping();
      break;
    case 'done':
    textarea.setAttribute('disabled','true');
    endTyping();
    break;
  }
});
/*const calculateTypingSpeed = (time_taken) => {
    let  totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}
*/