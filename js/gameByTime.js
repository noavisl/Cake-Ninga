//מערך של תמונות עוגות
const cakes = ["../images/cakes/cake1.png", "../images/cakes/cake2.png", "../images/cakes/cake3.png", "../images/cakes/cake4.png", "../images/cakes/cake5.png", "../images/cakes/cake6.png", "../images/cakes/cake7.png", "../images/cakes/cake8.png", "../images/cakes/cake9.png", "../images/cakes/bigCake.png", "../images/bombs/bomb.png", "../images/bombs/bomb.png"]
let countCakes = 0;
let upcakesInterval;
let boom;
let speed = 1000;
let cntBomb = 1;
let temp;
let myScore = 0;

let cakeMovementSpeed = 0.15;
let cakeTimeSpeed = 100;
let cakeTime = 2000; // זמן מרווח ראשוני (1000 אלפיות השנייה)
let numCakes=2;

let audioBoom=new Audio("../sounds/חיתוך פצצה.mp3");
let audioCake=new Audio("../sounds/חיתוך עוגה.mp3");
let audioBackground=new Audio("../sounds/רקע.mp3");

// אחרי כמה זמן לקרוא לפונקציה טיימר- אני עשיתי אחרי אפס דקות- מיד
setTimeout(timer,0);

// שיראו את הסכין במקום את העכבר
document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('custom-cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

//פןנקצית פתיחת משחק
function start() {
  audioBackground.play();
  myMove();
  //localStorage.clear();
}

function increaseSpeed() {
  cakeMovementSpeed += 0.000005;
}

function myMove() {
  upcakesInterval = setInterval(upCakeMove, cakeTime)
}

function upCakeMove() {
  numCakes += 4;
  let img = document.createElement('img');//התמונה השלמה המקורית
  let img1 = document.createElement('img');//חצי תמונה
  let img2 = document.createElement('img');//חצי תמונה
  let img3 = document.createElement('img');//תמונה ל+5
  let plusLeft = 0.15;
  let placeOfCake = Math.floor(Math.random() * cakes.length);
  img.src = cakes[placeOfCake];
  document.getElementById('backgroundGame').appendChild(img);
  img.setAttribute('id', "myAnimation");
  img.style.display = "block";
  if(placeOfCake==9){
    img.style.height="25vh";
  };
  let flag = 0;
  let posTop = 100;
  let posLeft = Math.floor(Math.random() * 100);
  // רינדום כיווני עליה
  let num = Math.floor(Math.random() * 2)
  if (num == 0){
    plusLeft *= -1;
  }
  //שליחה לפונקציית מהירות שע"פ הזמן מפחיתה מהמשתנה speed

  let cakeMoveInterval = setInterval(frame, 0);

  increaseSpeed();

  increaseSpeedInterval = setInterval(increaseSpeed, 10000);

  function frame() {

    if (flag == 0) {
      if (posTop <= 15) {
        flag = 1;
      } else {
        posTop -= cakeMovementSpeed;
        img.style.top = posTop + 'vh';
      }
    }
    else {
      if (posTop == 100) {
        clearInterval(cakeMoveInterval);
        clearInterval(increaseSpeedInterval);
        img.style.display = "none";
      } else {
        posTop += cakeMovementSpeed;
        img.style.top = posTop + 'vh';
      }
    }
    if (posLeft == 100 || posLeft == 0)
      plusLeft *= -1
    posLeft += cakeMovementSpeed;
    img.style.left = posLeft + 'vh';

    //ברגע הלחיצה על העוגה
    img.onmouseenter = function () {
      // שמע של עוגה ופצצה
      if(placeOfCake==10||placeOfCake==11){
        audioBoom.play();
      }
      else{
        audioCake.play();
      };

      //הוספת חצי עוגה 1
      img1.setAttribute("id", "myAnimation1")
      img1.style.top = img.style.top;
      img1.style.left = img.style.left;
      document.getElementById('backgroundGame').appendChild(img1);

      //הוספת חצי עוגה 2
      img2.setAttribute("id", "myAnimation2")
      img2.style.top = img.style.top;
      img2.style.left = img.style.left;
      document.getElementById('backgroundGame').appendChild(img2);

      //הוספת תמונה של +5
      img3.setAttribute("id", "myAnimation3")
      img3.style.top = img.style.top;
      img3.style.left = img.style.left;
      document.getElementById('backgroundGame').appendChild(img3);
      clearInterval(cakeMoveInterval);

      //בודק מי העוגה ושולח 2 חצאים ממנה לירידה מטה
      switch (placeOfCake) {
        case 0:
          img1.src = "../images/cutCakes/catCake LEFT/cake1 L.png";
          img2.src = "../images/cutCakes/cutCake RIGHT/cake1 R.png";
          moveDown(img1, true);
          moveDown(img2, false);
          countCakes += 3;
          break;
        case 1:
          img1.src = "../images/cutCakes/catCake LEFT/cake2 L.png";
          img2.src = "../images/cutCakes/cutCake RIGHT/cake2 R.png";
          moveDown(img1, true);
          moveDown(img2, false);
          countCakes += 3;
          break;
        case 2:
          img1.src = "../images/cutCakes/catCake LEFT/cake3 L.png";
          img2.src = "../images/cutCakes/cutCake RIGHT/cake3 R.png";
          moveDown(img1, true);
          moveDown(img2, false);
          countCakes += 3;
          break;
        case 3:
          img1.src = "../images/cutCakes/catCake LEFT/cake4 L.png";
          img2.src = "../images/cutCakes/cutCake RIGHT/cake4 R.png";
          moveDown(img1, true);
          moveDown(img2, false);
          countCakes += 3;
          break;
        case 4:
          img1.src = "../images/cutCakes/catCake LEFT/cake5 L.png";
          img2.src = "../images/cutCakes/cutCake RIGHT/cake5 R.png";
          moveDown(img1, true);
          moveDown(img2, false);
          countCakes += 3;
          break;
        case 5:
          img1.src = "../images/cutCakes/catCake LEFT/cake6 L.png";
          img2.src = "../images/cutCakes/cutCake RIGHT/cake6 R.png";
          moveDown(img1, true);
          moveDown(img2, false);
          countCakes += 3;
          break;
        case 6:
          img1.src = "../images/cutCakes/catCake LEFT/cake7 L.png";
          img2.src = "../images/cutCakes/cutCake RIGHT/cake7 R.png";
          moveDown(img1, true);
          moveDown(img2, false);
          countCakes += 3;
          break;
        case 7:
          img1.src = "../images/cutCakes/catCake LEFT/cake8 L.png";
          img2.src = "../images/cutCakes/cutCake RIGHT/cake8 R.png";
          moveDown(img1, true);
          moveDown(img2, false);
          countCakes += 3;
          break;
        case 8:
          img1.src = "../images/cutCakes/catCake LEFT/cake9 L.png";
          img2.src = "../images/cutCakes/cutCake RIGHT/cake9 R.png";
          moveDown(img1, true);
          moveDown(img2, false);
          countCakes += 3;
          break;
        case 9://עוגה גדולה
          img1.src = "../images/cutCakes/catCake LEFT/bigCake L.png";
          img1.style.height="25vh";
          img2.src = "../images/cutCakes/cutCake RIGHT/bigCake R.png";
          img2.style.height="25vh";
          img3.src = "../images/cutCakes/plus5.png";
          moveDown(img1, true);
          moveDown(img2, false);
          moveUp(img3)
          countCakes += 5;
          break;
        case 10://פצצה
        img3.src = "../images/cutCakes/שקוף -10 סופי אחרון.png";
        moveUp(img3, true);
        img3.style.width="20vh";
        img3.style.height="auto";
          if(countCakes>=10)
          countCakes -= 10;
       else
          countCakes=0;
          break;
        case 11://פצצה
        img3.src = "../images/cutCakes/שקוף -10 סופי אחרון.png";
        img3.style.width="20vh";
        img3.style.height="auto";
        moveUp(img3, true);
          if(countCakes>=10)
          countCakes -= 10;
          else
          countCakes=0;
          break;
        default:
          img.style.display = "none";
      }
      img.style.display = "none";
      document.getElementById('score').innerHTML = countCakes;
    }
  }
  clearInterval(upcakesInterval);
  if (cakeTime > 400) {
    cakeTime -= cakeTimeSpeed;
  }
  upcakesInterval = setInterval(upCakeMove, cakeTime);
}

function moveDown(img, flag) {
  let top1 = parseInt(img.style.top);
  let left1 = parseInt(img.style.left);
  let interval3 = setInterval(down, 0);

  function down() {
    top1 += 0.5;//יורד
    if (flag == true) {
      left1 -= 0.3;
    }
    else {
      left1 += 0.3;
    }
    img.style.top = top1 + "vh";
    img.style.left = left1 + "vh";
  }
}

function moveUp(img) {
  let top1 = parseInt(img.style.top);
  let left1 = parseInt(img.style.left);
  let interval3 = setInterval(up, 4);

  function up() {
    top1 -= 0.2;//יורד
    left1 += 0.1;
    img.style.top = top1 + "vh";
    img.style.left = left1 + "vh";
  }
}

function maxScore() {
  // confetti_fun();
  // הניקוד הנוכחי
  localStorage.setItem('myScore', countCakes);
  myScore = parseInt(localStorage.getItem('myScore'));
  document.getElementById("myScore").innerHTML = "הניקוד שלך: " + myScore;

  if (!(localStorage.max1T)) {
    localStorage.setItem('max1T', myScore);
    localStorage.setItem('max1NameT', inputValue);
    document.getElementById('maxi1').setAttribute('style','text-shadow: 0px 0px 20px black');
    document.getElementById('maxi1').setAttribute('style','color:rgb(170, 147, 255)');
  }
  else if (!(localStorage.max2T)) {
    if (myScore > parseInt(localStorage.max1T)) {
      localStorage.setItem('max2T', localStorage.max1T);
      localStorage.setItem('max1T', myScore);
      localStorage.setItem('max2NameT', localStorage.max1NameT);
      localStorage.setItem('max1NameT', inputValue);
      document.getElementById('maxi1').setAttribute('style','text-shadow: 0px 0px 20px black');
      document.getElementById('maxi1').setAttribute('style','color:rgb(170, 147, 255)');
    }
    else {
      localStorage.setItem('max2T', myScore);
      localStorage.setItem('max2NameT', inputValue);
      document.getElementById('maxi2').setAttribute('style','text-shadow: 0px 0px 20px black');
      document.getElementById('maxi2').setAttribute('style','color:rgb(170, 147, 255)');
    }
  }
  else if (!((localStorage.max3T))) {
    if (myScore > localStorage.max1T) {
      localStorage.setItem('max3T', localStorage.max2T);
      localStorage.setItem('max2T', localStorage.max1T);
      localStorage.setItem('max1T', myScore);
      localStorage.setItem('max3NameT', localStorage.max2NameT);
      localStorage.setItem('max2NameT', localStorage.max1NameT);
      localStorage.setItem('max1NameT', inputValue);
      document.getElementById('maxi1').setAttribute('style','text-shadow: 0px 0px 20px black');
      document.getElementById('maxi1').setAttribute('style','color:rgb(170, 147, 255)');
    }
    else if (myScore > parseInt(localStorage.max2T) && myScore < parseInt(localStorage.max1T)) {
      localStorage.setItem('max3T', localStorage.max2T);
      localStorage.setItem('max2T', myScore);
      localStorage.setItem('max3NameT', localStorage.max2NameT);
      localStorage.setItem('max2NameT', inputValue);
      document.getElementById('maxi2').setAttribute('style','text-shadow: 0px 0px 20px black');
      document.getElementById('maxi2').setAttribute('style','color:rgb(170, 147, 255)');
    }
    else {
      localStorage.setItem('max3T', myScore);
      localStorage.setItem('max3NameT', inputValue);
      document.getElementById('maxi3').setAttribute('style','text-shadow: 0px 0px 20px black');
      document.getElementById('maxi3').setAttribute('style','color:rgb(170, 147, 255)');
    }
  }
  else {
    if (myScore > parseInt(localStorage.max1T))//הכי גבוה
    {
      localStorage.setItem('max3T', localStorage.max2T);
      localStorage.setItem('max2T', localStorage.max1T);
      localStorage.setItem('max1T', myScore);
      localStorage.setItem('max3NameT', localStorage.max2NameT);
      localStorage.setItem('max2NameT', localStorage.max1NameT);
      localStorage.setItem('max1NameT', inputValue);
      document.getElementById('maxi1').setAttribute('style','text-shadow: 0px 0px 20px black');
      document.getElementById('maxi1').setAttribute('style','color:rgb(170, 147, 255)');
    }
    else if (myScore > parseInt(localStorage.max2T) && myScore < parseInt(localStorage.max1T))//אמצעי
    {
      localStorage.setItem('max3T', localStorage.max2T);
      localStorage.setItem('max2T', myScore);
      localStorage.setItem('max1T', localStorage.max1T);
      localStorage.setItem('max3NameT', localStorage.max2NameT);
      localStorage.setItem('max2NameT', inputValue);
      localStorage.setItem('max1NameT', localStorage.max1NameT);
      document.getElementById('maxi2').setAttribute('style','text-shadow: 0px 0px 20px black');
      document.getElementById('maxi2').setAttribute('style','color:rgb(170, 147, 255)');
    }
    else if (myScore > parseInt(localStorage.max3T) && myScore < parseInt(localStorage.max2T))//נמוך
    {
      localStorage.setItem('max3T', myScore);
      localStorage.setItem('max2T', localStorage.max2T);
      localStorage.setItem('max1T', localStorage.max1T);
      localStorage.setItem('max3NameT', inputValue);
      localStorage.setItem('max2NameT', localStorage.max2NameT);
      localStorage.setItem('max1NameT', localStorage.max1NameT);
      document.getElementById('maxi3').setAttribute('style','text-shadow: 0px 0px 20px black');
      document.getElementById('maxi3').setAttribute('style','color:rgb(170, 147, 255)');
    }
  }
  if (parseInt(localStorage.max1T))
    document.getElementById("maxi1").innerHTML = "מקום ראשון: " + localStorage.max1NameT + " " + localStorage.max1T;
  if (parseInt(localStorage.max2T))
    document.getElementById("maxi2").innerHTML = "מקום שני: " + localStorage.max2NameT + " " + localStorage.max2T;
  if (parseInt(localStorage.max3T))
    document.getElementById("maxi3").innerHTML = "מקום שלישי: " + localStorage.max3NameT + " " + localStorage.max3T;
}

function confetti_fun(){
  var count = 200;
  var defaults = {
    origin: { y: 0.7 }
  };
  
  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }
  
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
  
};




// כדאי לשנות את הטיימר לדקה ושלא יהיה שלוש דקות
  function timer() {
    var second = 1;
    var minuts = 1;
    var flag = 0;
    var t = setInterval(function () {
      if (second == 0) {
        if (flag == 1) {
          second = 59;
          minuts--;
          flag = 0;
        }
        else {
          flag = 1;
          second = 0;
        }
      }
  
      if (second <= 9) {
  
        if (second > 0)
          second -= 1;
        document.getElementById('clock').innerHTML = minuts + ":0" + second;
      }
      else {
        document.getElementById('clock').innerHTML = minuts + ":" + second;
        if (second > 0)
          second -= 1;
      }
      if(minuts == 0 && second<10){
        document.getElementById('clock').style.color="red";
      }
      if (minuts == 0 && second == 0) {
        clearInterval(t);
        gameOver();
      }
  
  
    }, 1000);
  
  }

  

function gameOver() {
  clearInterval(upcakesInterval);
  document.getElementById("gameOver").style.display = "inline";
  maxScore();
}
