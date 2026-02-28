
function buildQuiz(){

    let reman = myQuestions.length % 3;
    let extras = 3 - (myQuestions.length % 3);
    console.log(extras)
    let itnum = Math.ceil(myQuestions.length / 3);
    let number = 1;
    let string = "";
    let totalquestion = myQuestions.length ;
    totalquestion = totalquestion - 1;
    let countDown = function f(fromNumber) {
    let nextNumber = fromNumber - 1;
    // console.log(fromNumber);
    if (fromNumber > 0) {
    if (fromNumber > 1) {
    string += `<div style="position:relative;"><div class="slide">`;
    string += `<div id="id3" onclick="press2('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
    
    <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
            <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions[totalquestion].question} </div>
            </div>`;
    totalquestion = totalquestion - 1;
    string += `<div id="id3" onclick="press2('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
    <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
            <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions[totalquestion].question} </div>
    </div>`;
    totalquestion = totalquestion - 1;
    string += `<div id="id3" onclick="press2('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
    <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
            <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions[totalquestion].question} </div>
    </div>`;
    totalquestion = totalquestion - 1;
    
    string += `</div></div>`;
    } 
    
    if (nextNumber == 0) {
    
    if (reman == 0) {
    string += `<div style="position:relative;"><div class="slide">`;
    string += `<div id="id3" onclick="press2('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
    
    <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
            <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions[totalquestion].question} </div>
    </div>`;
    totalquestion = totalquestion - 1;
    string += `<div id="id3" onclick="press2('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
    
    <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
            <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions[totalquestion].question} </div>
    </div>`;
    totalquestion = totalquestion - 1;
    string += `<div id="id3" onclick="press2('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
    
    <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
            <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions[totalquestion].question} </div>
    </div>`;
    totalquestion = totalquestion - 1;
    
    string += `</div></div>`;
    // string += `<div style="position:relative;"><div class="slide">`;
    // string += `<div id="id2" onclick="press2('7777')" class="subjectBox modclass" style="visibility:;">
    // <div class="block" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    // <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">Blocked </div>
    // </div><div id="id2" onclick="press2('8888')" class="subjectBox modclass" style="visibility:;">
    // <div class="block" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    // <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">Blocked </div>
    // </div><div id="id2" onclick="press2('9999')" class="subjectBox modclass" style="visibility:;">
    // <div class="block" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    // <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">Blocked </div>
    // </div>`;
    // string += `</div></div>`;
    }else{
    
    string += `<div style="position:relative;"><div class="slide">`;
    for(let i=0;i<reman;i++){
    string += `<div id="id3" onclick="press2('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
    
    <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
            <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions[totalquestion].question} </div>
    </div>`;
    totalquestion = totalquestion - 1;
    }
    for(let i=0;i<extras;i++){
    string += `<div id="id2" onclick="press2xxx('wwwww')" class="subjectBox modclass" style="visibility:;">
    
    <div class="block" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">Blocked </div>
    </div>`;
    }
    string += `</div></div>`;
    }
    }
    
    f(nextNumber);
    }
    quizContainer.innerHTML = string;
    }
    
    let newYearCountDown = countDown;
    
    countDown = null;
    
    
    newYearCountDown(itnum);
    
    }
    
    function buildQuiz2(){
    
    let reman2 = myQuestions2a.length % 3;
    let extras2 = 3 - (myQuestions2a.length % 3);
    console.log(extras2)
    
    let itnum2 = Math.ceil(myQuestions2a.length / 3);
    let number2 = 1;
    let string2 = "";
    let totalquestion2 = myQuestions2a.length ;
    totalquestion2 = totalquestion2 - 1;
    let countDown2 = function f2(fromNumber2) {
    let nextNumber2 = fromNumber2 - 1;
    // console.log(fromNumber2);
    if (fromNumber2 > 0) {
    if (fromNumber2 > 1) {
    string2 += `<div style="position:relative;"><div class="slide2">`;
    string2 += `<div id="id3" onclick="press2('${myQuestions2a[totalquestion2].question}')" class="subjectBox modclass" style="visibility:;">
    
    <div class="${myQuestions2a[totalquestion2].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions2a[totalquestion2].question} </div>
    
    </div>`;
    totalquestion2 = totalquestion2 - 1;
    string2 += `<div id="id3" onclick="press2('${myQuestions2a[totalquestion2].question}')" class="subjectBox modclass" style="visibility:;">
    
    <div class="${myQuestions2a[totalquestion2].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions2a[totalquestion2].question} </div>
    </div>`;
    totalquestion2 = totalquestion2 - 1;
    string2 += `<div id="id3" onclick="press2('${myQuestions2a[totalquestion2].question}')" class="subjectBox modclass" style="visibility:;">
    <div class="${myQuestions2a[totalquestion2].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions2a[totalquestion2].question} </div>
    </div>`;
    totalquestion2 = totalquestion2 - 1;
    
    string2 += `</div></div>`;
    } 
    
    if (nextNumber2 == 0) {
    
    if (reman2 == 0) {
    string2 += `<div style="position:relative;"><div class="slide2">`;
    string2 += `<div id="id3" onclick="press2('${myQuestions2a[totalquestion2].question}')" class="subjectBox modclass" style="visibility:;">
    <div class="${myQuestions2a[totalquestion2].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions2a[totalquestion2].question} </div>
    </div>`;
    totalquestion2 = totalquestion2 - 1;
    string2 += `<div id="id3" onclick="press2('${myQuestions2a[totalquestion2].question}')" class="subjectBox modclass" style="visibility:;">
    <div class="${myQuestions2a[totalquestion2].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions2a[totalquestion2].question} </div>
    </div>`;
    totalquestion2 = totalquestion2 - 1;
    string2 += `<div id="id3" onclick="press2('${myQuestions2a[totalquestion2].question}')" class="subjectBox modclass" style="visibility:;">
    <div class="${myQuestions2a[totalquestion2].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions2a[totalquestion2].question} </div>
    </div>`;
    totalquestion2 = totalquestion2 - 1;
    
    string2 += `</div></div>`;
    // string2 += `<div style="position:relative;"><div class="slide2">`;
    // string2 += `<div id="id2" onclick="press2('oooo')" class="subjectBox modclass" style="visibility:;">
    
    // <div class="add" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    // <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">Add Degree </div>
    // </div><div id="id2" onclick="press2('pppp')" class="subjectBox modclass" style="visibility:;">
    
    // <div class="add" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    // <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">Add Degree </div>
    // </div><div id="id2" onclick="press2('aaaa')" class="subjectBox modclass" style="visibility:;">
    
    // <div class="add" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    // <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">Add Degree </div>
    // </div>`;
    // string2 += `</div></div>`;
    }else{
    
    string2 += `<div style="position:relative;"><div class="slide2">`;
    for(let i=0;i<reman2;i++){
    string2 += `<div id="id3" onclick="press2('${myQuestions2a[totalquestion2].question}')" class="subjectBox modclass" style="visibility:;">
    
    <div class="${myQuestions2a[totalquestion2].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">${myQuestions2a[totalquestion2].question} </div>
    </div>`;
    totalquestion2 = totalquestion2 - 1;
    }
    for(let i=0;i<extras2;i++){
    // string2 += `<div id="id2" onclick="press2('dddd')" class="subjectBox modclass" style="visibility:;">
    
    // <div class="add" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    // <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">Add Degree </div>
    // </div>`;
    string += `<div id="id2" onclick="press2xxx('wwwww')" class="subjectBox modclass" style="visibility:;">
    
    <div class="block" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 0px 0px 0px;">Blocked </div>
    </div>`;
    }
    string2 += `</div></div>`;
    }
    }
    
    f2(nextNumber2);
    }
    quizContainer2.innerHTML = string2;
    }
    
    let newYearCountDown2 = countDown2;
    countDown2 = null;
    newYearCountDown2(itnum2);
    }
    
    
    function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
    previousButton.style.display = 'none';
    }
    else{
    previousButton.style.display = '';
    }
    if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    }
    else{
    nextButton.style.display = '';
    }
    }
    function showNextSlide() {
    showSlide(currentSlide + 1);
    }
    
    function showPreviousSlide() {
    showSlide(currentSlide - 1);
    }
    
    function showSlide2(n) {
    slides2[currentSlide2].classList.remove('active-slide2');
    slides2[n].classList.add('active-slide2');
    currentSlide2 = n;
    if(currentSlide2 === 0){
    previousButton2.style.display = 'none';
    }
    else{
    previousButton2.style.display = '';
    }
    if(currentSlide2 === slides2.length-1){
    nextButton2.style.display = 'none';
    }
    else{
    nextButton2.style.display = '';
    }
    }
    function showNextSlide2() {
    showSlide2(currentSlide2 + 1);
    }
    
    function showPreviousSlide2() {
    showSlide2(currentSlide2 - 1);
    }
    
    const quizContainer = document.getElementById('quiz');
    const quizContainer2 = document.getElementById('quiz2');
    // const myQuestions = [
    // {
    // question: "First",
    // answers: {
    // a: "Douglas Crockford",
    // b: "Sheryl Sandberg",
    // c: "Brendan Eich"
    // },
    // correctAnswer: "c"
    // },
    // {
    // question: "Second",
    // answers: {
    // a: "Douglas Crockford",
    // b: "Sheryl Sandberg",
    // c: "Brendan Eich"
    // },
    // correctAnswer: "c"
    // },
    // {
    // question: "Third",
    // answers: {
    // a: "Node.js",
    // b: "TypeScript",
    // c: "npm"
    // },
    // correctAnswer: "c"
    // }, 
    // {
    // question: "Fourth",
    // answers: {
    // a: "Node.js",
    // b: "TypeScript",
    // c: "npm"
    // },
    // correctAnswer: "c"
    // },
    // {
    // question: "Fifth",
    // answers: {
    // a: "Angular",
    // b: "jQuery",
    // c: "RequireJS",
    // d: "ESLint"
    // },
    // correctAnswer: "d"
    // },
    // {
    // question: "Sixth",
    // answers: {
    // a: "Angular",
    // b: "jQuery",
    // c: "RequireJS",
    // d: "ESLint"
    // },
    // correctAnswer: "d"
    // },
    // {
    // question: "Seventhi",
    // answers: {
    // a: "Angular",
    // b: "jQuery",
    // c: "RequireJS",
    // d: "ESLint"
    // },
    // correctAnswer: "d"
    // }
    // ];
    
    buildQuiz();
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    showSlide(currentSlide);
    
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    
    buildQuiz2();
    const previousButton2 = document.getElementById("previous2");
    const nextButton2 = document.getElementById("next2");
    const slides2 = document.querySelectorAll(".slide2");
    let currentSlide2 = 0;
    
    showSlide2(currentSlide2);
    
    previousButton2.addEventListener("click", showPreviousSlide2);
    nextButton2.addEventListener("click", showNextSlide2);

    function press2(rrr){
        if(rrr == 'attendance'){
            // alert(rrr);
            const itemsData = localStorage.getItem('subjects');
            const id = localStorage.getItem('subjectId');
            // const idParse = JSON.parse(itemsData);
            console.log(id);
            // console.log(idParse)
            if(itemsData){
                const items = JSON.parse(itemsData);
                const toFind = id;
                const found = items.find(value => value._id === toFind);

                if(found){
                    console.log('item found:', found.attRegisFlag);
                    if(found.attRegisFlag == true){
                        console.log('there is true data');
                        document.location = `/combi/attendance.html`;
                    }else{
                        console.log('there is no false data');
                        document.location = `/combi/attendance1.html`;
                    }
                }else{
                    console.log('not found');
                    document.location = `/combi/index.html`;
                }
            }else{
                console.log('no subjects');
                document.location = `/combi/index.html`;
            }
        }else{
            document.location = `/combi/${rrr}.html`;

        }




    }