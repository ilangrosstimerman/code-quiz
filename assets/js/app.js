document.addEventListener('DOMContentLoaded', (event) => {

    let time = 20;
    let score = 0;
    let qCount = 0;
    let recordsArray = [];
   
    document.querySelector('#quizHolder p').innerHTML = questions[0].title;
    document.querySelector('#quizHolder ol li:nth-of-type(1) div').innerHTML = `1. ${questions[qCount].choices[0]}`;
    document.querySelector('#quizHolder ol li:nth-of-type(2) div').innerHTML = `2. ${questions[qCount].choices[1]}`;
    document.querySelector('#quizHolder ol li:nth-of-type(3) div').innerHTML = `3. ${questions[qCount].choices[2]}`;
    document.querySelector('#quizHolder ol li:nth-of-type(4) div').innerHTML = `4. ${questions[qCount].choices[3]}`;
   
    let myTimer = () => {
     if (time > 0) {
      time = time - 1;
      document.getElementById('time').innerHTML = time;
     } else {
      clearInterval(clock);
      document.getElementById('score').innerHTML = score;
      document.getElementById('finish').classList.remove('hide');
      document.getElementById('quizHolder').classList.add('hide');
     }
    }
   
    let clock;
    document.querySelector("#intro button").addEventListener("click", (e) => {
     document.getElementById('intro').classList.add('hide');
     document.getElementById('quizHolder').classList.remove('hide');
     clock = setInterval(myTimer, 1000);
    });
  
  let timeset;
    let scoreIndicator = () => {
      clearTimeout(timeset);
      timeset = setTimeout(() => { document.querySelector('#scoreIndicator').classList.add('hide') }, 3000);
    }
   
    let answers = document.querySelectorAll('#quizHolder ol li div');
    Array.from(answers).forEach(check => {
     check.addEventListener('click', function(event) {
      if (this.innerHTML.substring(3, this.length) === questions[qCount].answer) {
       score = score + 1;
       qCount = qCount + 1;
       document.querySelector('#scoreIndicator p').innerHTML = "Correct!"
       document.querySelector('#scoreIndicator').classList.remove('hide', scoreIndicator());
       if (qCount === questions.length) {
        document.getElementById('quizHolder').classList.add('hide');
        document.getElementById('finish').classList.remove('hide');
        time = 0;
        document.getElementById('time').innerHTML = time;
       } else {
        document.querySelector('#quizHolder p').innerHTML = questions[qCount].title;
        document.querySelector('#quizHolder ol li:nth-of-type(1) div').innerHTML = `1. ${questions[qCount].choices[0]}`;
        document.querySelector('#quizHolder ol li:nth-of-type(2) div').innerHTML = `2. ${questions[qCount].choices[1]}`;
        document.querySelector('#quizHolder ol li:nth-of-type(3) div').innerHTML = `3. ${questions[qCount].choices[2]}`;
        document.querySelector('#quizHolder ol li:nth-of-type(4) div').innerHTML = `4. ${questions[qCount].choices[3]}`;
       }
      } else {
       time = time - 10;
       document.querySelector('#scoreIndicator p').innerHTML = "Wrong!";
       document.querySelector('#scoreIndicator').classList.remove('hide', scoreIndicator());
       if (time < 0) {
        time = 0;
        document.getElementById('time').innerHTML = time;
       }
       qCount = qCount + 1;
       if (qCount === questions.length) {
        document.getElementById('quizHolder').classList.add('hide');
        document.getElementById('finish').classList.remove('hide');
        time = 0;
        document.getElementById('time').innerHTML = time;
       } else {
        document.querySelector('#quizHolder p').innerHTML = questions[qCount].title;
        document.querySelector('#quizHolder ol li:nth-of-type(1) div').innerHTML = `1. ${questions[qCount].choices[0]}`;
        document.querySelector('#quizHolder ol li:nth-of-type(2) div').innerHTML = `2. ${questions[qCount].choices[1]}`;
        document.querySelector('#quizHolder ol li:nth-of-type(3) div').innerHTML = `3. ${questions[qCount].choices[2]}`;
        document.querySelector('#quizHolder ol li:nth-of-type(4) div').innerHTML = `4. ${questions[qCount].choices[3]}`;
       }
      }
     });
    });
   
   
    document.querySelector("#records button").addEventListener("click", () => {
     let initialsRecord = document.querySelector('#initials').value
     recordsArray.push(`${initialsRecord}  ${score}`);
     document.querySelector('#highScores ol').innerHTML = '';
     document.getElementById('finish').classList.add('hide');
     document.getElementById('highScores').classList.remove('hide');
   
     Array.from(recordsArray).forEach(check => {
      var score = document.createElement("li");
      score.innerHTML = check;
      document.querySelector('#highScores ol').appendChild(score);
     });
     document.querySelector("#initials").value = '';
    });
   
   
     document.querySelector("#clearScores").addEventListener("click", () => {
      recordsArray = [];
      document.querySelector('#highScores ol').innerHTML = "";
     }); 
   
     
     document.querySelector("#reset").addEventListener("click", () => {
      time = 20;
      score = 0;
      qCount = 0;
      document.querySelector('#quizHolder p').innerHTML = questions[qCount].title;
      document.querySelector('#quizHolder ol li:nth-of-type(1) div').innerHTML = `1. ${questions[qCount].choices[0]}`;
      document.querySelector('#quizHolder ol li:nth-of-type(2) div').innerHTML = `2. ${questions[qCount].choices[1]}`;
      document.querySelector('#quizHolder ol li:nth-of-type(3) div').innerHTML = `3. ${questions[qCount].choices[2]}`;
      document.querySelector('#quizHolder ol li:nth-of-type(4) div').innerHTML = `4. ${questions[qCount].choices[3]}`;
      let sections = document.querySelectorAll("section");
      Array.from(sections).forEach((userItem) => {
        userItem.classList.add('hide');
      });
      document.getElementById('intro').classList.remove('hide');
     }); 
   
  
   
   
    document.getElementById("scores").addEventListener("click", (e) => {
     e.preventDefault();
     time = 20;
     score = 0;
     qCount = 0;
     document.querySelector('#quizHolder p').innerHTML = questions[qCount].title;
     document.querySelector('#quizHolder ol li:nth-of-type(1) div').innerHTML = `1. ${questions[qCount].choices[0]}`;
     document.querySelector('#quizHolder ol li:nth-of-type(2) div').innerHTML = `2. ${questions[qCount].choices[1]}`;
     document.querySelector('#quizHolder ol li:nth-of-type(3) div').innerHTML = `3. ${questions[qCount].choices[2]}`;
     document.querySelector('#quizHolder ol li:nth-of-type(4) div').innerHTML = `4. ${questions[qCount].choices[3]}`;
     let sections = document.querySelectorAll("section");
      Array.from(sections).forEach((userItem) => {
        userItem.classList.add('hide');
      });
     document.getElementById('highScores').classList.remove('hide');
    });
   });