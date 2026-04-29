
function buildQuiz2(){
    
    let itnum2 = subjectsCards.length ;
    let string2 = "";
    let stringans = "";
    let totalquestion2 = subjectsCards.length ; 
    totalquestion2 = totalquestion2 - 1; 
    let test1 = 0;
    
    let countDown2 = function f2(fromNumber2) { 
    let nextNumber2 = fromNumber2 - 1;  
    console.log(fromNumber2);
    if (fromNumber2 > 0) {



stringans += `<div class=" slide " style="display:block;">
        <div class="  answerbox">${subjectsCards[test1].answer} <br> ${totalquestion2}</div>
        <div class="  answerbox">${subjectsCards[test1].answer} <br> ${totalquestion2}</div>
        <div class="  answerbox">${subjectsCards[test1].answer} <br> ${totalquestion2}</div>
        <div class="  answerbox">${subjectsCards[test1].answer} <br> ${totalquestion2}</div>
        </div>
        `;

        string2 += `<div class="slide2">
    <div class="quiz" style="
    word-break: break-word;">`;
  string2 += ` <p> 
${subjectsCards[test1].question}<br>${totalquestion2} </p>
    </div>`

    test1 = test1 + 1;

        string2 += `
</div>
`;
     if (nextNumber2 == 0) {
    
stringans += `<div class=" slide " style="display:none;">`;
    
stringans += `    </div>
        `;

     string2 += `<div style="position:relative;"><div class="slide2">`;
     string2 += `<div id="id3" onclick="" class="subjectBox modclass" style="visibility:;">
         <div class="subjects" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
                 <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${tota}! You have completed all for today. </div>
     </div>`;
     test1 = test1 + 1;
    
     string2 += `</div></div>`;
 }
    f2(nextNumber2);
    }
    
    quizContainer2.innerHTML = string2;
    quizAns.innerHTML = stringans;
    }
    
    let newYearCountDown2 = countDown2;
    countDown2 = null;
    newYearCountDown2(itnum2);
    }
    
    
let tota = "3 out of 9" ;

    function showSlide2(n) {
    slides2[currentSlide2].classList.remove('active-slide2');
    slides2[n].classList.add('active-slide2');
    slides[currentSlide2].classList.remove('active-slide');
    console.log("current slide is" + currentSlide2);
    slides[n].classList.add('active-slide');
    currentSlide2 = n;
    console.log("current slide is" + currentSlide2);
    if(currentSlide2 === 0){
    // previousButton2.style.display = 'none';
    previousButton2.style.visibility = 'hidden';
    }
    else{
    // previousButton2.style.display = '';
    previousButton2.style.visibility = '';
    }
    if(currentSlide2 === slides2.length-1){
        console.log(currentSlide2);
    // nextButton2.style.display = 'none';
    // previousButton2.style.visibility = 'hidden';
    nextButton2.style.visibility = 'hidden';
    rejectButton2.style.visibility = 'hidden';
    approveButton2.style.visibility = 'hidden';
    }
    // else if(currentSlide2 === slides2.length){
    //     alert("hello")
    // }
    else{
    // nextButton2.style.display = '';
    nextButton2.style.visibility = '';
    rejectButton2.style.visibility = '';
    approveButton2.style.visibility = '';
    }
    }



    function showNextSlide2() {
    showSlide2(currentSlide2 + 1);
    }
    
    function showPreviousSlide2() {
    showSlide2(currentSlide2 - 1);
    }
    
    // const quizContainer2 = document.getElementById('quiz2');
    const quizContainer2 = document.getElementById('quiz3');
    const quizAns = document.getElementById('reveal');
    

// const getSubjects = localStorage.getItem('subjects');
const getSubjects = localStorage.getItem('fcquiz');

    if((getSubjects === ''||getSubjects === null)||getSubjects.length === 0){
    // const previousButton2 = document.getElementById("previous");
    const nextButton2 = document.getElementById("next");
    const rejectButton2 = document.getElementById("reject");
    const approveButton2 = document.getElementById("approve");
    const previousButton2 = document.getElementById("previous");
        console.log("this is the if part");
            quizContainer2.innerHTML = "<div style='background-color:red;height:200px;width:200px;'>There is nere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz dato quiz data</div>";
    nextButton2.style.visibility = 'hidden';
    rejectButton2.style.visibility = 'hidden';
    approveButton2.style.visibility = 'hidden';
    previousButton2.style.visibility = 'hidden';
    // previousButton2.style.visibility = 'hidden';
    // }else{
    //     console.log("this is the else part");
    }

        let subjectsCards = JSON.parse(getSubjects);
        console.log(subjectsCards);
        buildQuiz2();
    
    // const previousButton2 = document.getElementById("previous");
    // const nextButton2 = document.getElementById("next");
    const previousButton2 = document.getElementById("previous");
    const nextButton2 = document.getElementById("next");
    const rejectButton2 = document.getElementById("reject");
    const approveButton2 = document.getElementById("approve");
    // const editButton = document.getElementById("edit");
    // const previousButton2 = document.getElementById("previous2");
    // const nextButton2 = document.getElementById("next2");
    const slides2 = document.querySelectorAll(".slide2");
    const slides = document.querySelectorAll(".slide");
    let currentSlide2 = 0;  
    
    showSlide2(currentSlide2);
    
    function ssss(){
        alert("ho");
    }
    previousButton2.addEventListener("click", showPreviousSlide2);
    // previousButton2.addEventListener("click", showNextSlide2);
    // previousButton2.addEventListener("click", ssss);
    nextButton2.addEventListener("click", showNextSlide2);
    rejectButton2.addEventListener("click", showNextSlide2);
    rejectButton2.addEventListener("click", ssss);
    approveButton2.addEventListener("click", showNextSlide2);
    approveButton2.addEventListener("click", ssss);

