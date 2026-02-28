

function parseJwt(token) {
        try {
          // Split the token to get the payload (second part)
          const base64Url = token.split('.')[1];
      
          // Decode Base64URL to JSON
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split('')
              .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          );
      
          // Parse JSON and return the payload
          return JSON.parse(jsonPayload);
        } catch (error) {
          console.error("Failed to parse JWT:", error);
          return null;
        }
      }
      
      // Example usage
      // const token = "your.jwt.token";
      const token = localStorage.getItem("authToken");
      const payload = parseJwt(token);
      console.log("Decoded Payload:", payload);
      console.log("designation:", payload.designation);


const getSubjects = localStorage.getItem('subjects');

            let subjectsCards = JSON.parse(getSubjects);
            // {myQuestions[totalquestion].answers.a
            console.log(payload.designation);
                // subjectsCards.answers.a = "subjects";
                

function buildQuiz(){

    let reman = myQuestions.length % 3;
    let extras = 3 - (myQuestions.length % 3);
    let itnum = Math.ceil(myQuestions.length / 3);
    let number = 1;
    let string = "";
    let totalquestion = myQuestions.length ;
    totalquestion = totalquestion - 1;
    let countDown = function f(fromNumber) {
    let nextNumber = fromNumber - 1;
    console.log(fromNumber);
    if (fromNumber > 0) {
    if (fromNumber > 1) {
        string += `<div style="position:relative;"><div class="slide">`;
        string += `<div id="id3" onclick="press('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
        <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
                <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">${myQuestions[totalquestion].question} </div>
                </div>`;
        totalquestion = totalquestion - 1;
        string += `<div id="id3" onclick="press('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
        <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
                <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">${myQuestions[totalquestion].question} </div>
        </div>`;
        totalquestion = totalquestion - 1;
        string += `<div id="id3" onclick="press('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
        <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
                <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">${myQuestions[totalquestion].question} </div>
        </div>`;
        totalquestion = totalquestion - 1;
        
        string += `</div></div>`;
        } 
        
    
    if (nextNumber == 0) {
    
    if (reman == 0) {
        string += `<div style="position:relative;"><div class="slide">`;
        string += `<div id="id3" onclick="press('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
        
        <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
                <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">${myQuestions[totalquestion].question} </div>
        </div>`;
        totalquestion = totalquestion - 1;
        string += `<div id="id3" onclick="press('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
        
        <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
                <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">${myQuestions[totalquestion].question} </div>
        </div>`;
        totalquestion = totalquestion - 1;
        string += `<div id="id3" onclick="press('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
        
        <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
                <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">${myQuestions[totalquestion].question} </div>
        </div>`;
        totalquestion = totalquestion - 1;
        
        string += `</div></div>`;
        // string += `<div style="position:relative;"><div class="slide">`;
        // string += `<div id="id2" onclick="press2('7777')" class="subjectBox modclass" style="visibility:;">
        // <div class="empty" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
        // <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">empty </div>
        // </div><div id="id2" onclick="press2('8888')" class="subjectBox modclass" style="visibility:;">
        // <div class="empty" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
        // <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">empty </div>
        // </div><div id="id2" onclick="press2('9999')" class="subjectBox modclass" style="visibility:;">
        // <div class="empty" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
        // <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">empty </div>
        // </div>`;
        // string += `</div></div>`;
        }else{
        
        string += `<div style="position:relative;"><div class="slide">`;
        for(let i=0;i<reman;i++){
        string += `<div id="id3" onclick="press('${myQuestions[totalquestion].question}')" class="subjectBox modclass" style="visibility:;">
        
        <div class="${myQuestions[totalquestion].answers.a}" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
                <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">${myQuestions[totalquestion].question} </div>
        </div>`;
        totalquestion = totalquestion - 1;
        }
        for(let i=0;i<extras;i++){
        string += `<div id="id2" onclick="press2ddd('wwwww')" class="subjectBox modclass" style="visibility:;">
        
        <div class="empty" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
        <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">empty </div>
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

        // console.log(subjectsCards[1].semester);
    
    let reman2 = subjectsCards.length % 3;
    let extras2 = 3 - (subjectsCards.length % 3);
    let itnum2 = Math.ceil(subjectsCards.length / 3);
    let number2 = 1;
    let string2 = "";
    let totalquestion2 = subjectsCards.length ;
    totalquestion2 = totalquestion2 - 1;
    let countDown2 = function f2(fromNumber2) {
    let nextNumber2 = fromNumber2 - 1;
    console.log(fromNumber2);
    if (fromNumber2 > 0) {
    if (fromNumber2 > 1) {
    string2 += `<div style="position:relative;"><div class="slide2">`;
    string2 += `<div id="id3" onclick="press2('${subjectsCards[totalquestion2].subject}','${subjectsCards[totalquestion2]._id}','${subjectsCards[totalquestion2].author}','${totalquestion2}')" class="subjectBox modclass" style="visibility:;">
       
        <div class="subjects" onclick="" style="font-size:;background-color:;margin:25px 0px 5px 0px;"></div>
        

        <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
        <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
          <div style="margin : 0 auto;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
            
          </div>
        </div>
      </div>


      <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
      <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
        <div style="margin-left:50%;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
          
        </div>
      </div>
    </div>



    </div>`;
    totalquestion2 = totalquestion2 - 1;
    string2 += `<div id="id3" onclick="press2('${subjectsCards[totalquestion2].subject}','${subjectsCards[totalquestion2]._id}','${subjectsCards[totalquestion2].author}','${totalquestion2}')" class="subjectBox modclass" style="visibility:;">
      
        <div class="subjects" onclick="" style="font-size:;background-color:;margin:25px 0px 5px 0px;"></div>
        

        <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
        <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
          <div style="margin : 0 auto;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
            
          </div>
        </div>
      </div>


      <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
      <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
        <div style="margin-left:50%;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
          
        </div>
      </div>
    </div>



    </div>`;
    totalquestion2 = totalquestion2 - 1;
    string2 += `<div id="id3" onclick="press2('${subjectsCards[totalquestion2].subject}','${subjectsCards[totalquestion2]._id}','${subjectsCards[totalquestion2].author}','${totalquestion2}')" class="subjectBox modclass" style="visibility:;">
        <div class="subjects" onclick="" style="font-size:;background-color:;margin:25px 0px 5px 0px;"></div>
        

        <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
        <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
          <div style="margin : 0 auto;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
            
          </div>
        </div>
      </div>


      <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
      <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
        <div style="margin-left:50%;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
          
        </div>
      </div>
    </div>



    </div>`;
    totalquestion2 = totalquestion2 - 1;
    
    string2 += `</div></div>`;
    } 
    
    if (nextNumber2 == 0) {
    
    if (reman2 == 0) {
    string2 += `<div style="position:relative;"><div class="slide2">`;
    string2 += `<div id="id3" onclick="press2('${subjectsCards[totalquestion2].subject}','${subjectsCards[totalquestion2]._id}','${subjectsCards[totalquestion2].author}','${totalquestion2}')" class="subjectBox modclass" style="visibility:;">
     
        <div class="subjects" onclick="" style="font-size:;background-color:;margin:25px 0px 5px 0px;"></div>
        

        <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
        <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
          <div style="margin : 0 auto;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
            
          </div>
        </div>
      </div>


      <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
      <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
        <div style="margin-left:50%;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
          
        </div>
      </div>
    </div>



    </div>`;
    totalquestion2 = totalquestion2 - 1;
    string2 += `<div id="id3" onclick="press2('${subjectsCards[totalquestion2].subject}','${subjectsCards[totalquestion2]._id}','${subjectsCards[totalquestion2].author}','${totalquestion2}')" class="subjectBox modclass" style="visibility:;">
      
        <div class="subjects" onclick="" style="font-size:;background-color:;margin:25px 0px 5px 0px;"></div>
        

        <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
        <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
          <div style="margin : 0 auto;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
            
          </div>
        </div>
      </div>


      <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
      <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
        <div style="margin-left:50%;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
          
        </div>
      </div>
    </div>



    </div>`;
    totalquestion2 = totalquestion2 - 1;
    string2 += `<div id="id3" onclick="press2('${subjectsCards[totalquestion2].subject}','${subjectsCards[totalquestion2]._id}','${subjectsCards[totalquestion2].author}','${totalquestion2}')" class="subjectBox modclass" style="visibility:;">
      
        <div class="subjects" onclick="" style="font-size:;background-color:;margin:25px 0px 5px 0px;"></div>
        

        <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
        <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
          <div style="margin : 0 auto;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
            
          </div>
        </div>
      </div>


      <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
      <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
        <div style="margin-left:50%;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
          
        </div>
      </div>
    </div>



    </div>`;
    totalquestion2 = totalquestion2 - 1;
    string2 += `</div></div>`;
    string2 += `<div style="position:relative;"><div class="slide2">`;
      if(payload.designation == "teacher"){
    string2 += `<div id="id2" onclick="press3()" class="subjectBox modclass" style="visibility:;">
    
    <div class="add" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">Add Subject </div>
    </div><div id="id2" onclick="press3()" class="subjectBox modclass" style="visibility:;">
    
    <div class="add" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">Add Subject </div>
    </div><div id="id2" onclick="press3()" class="subjectBox modclass" style="visibility:;">
    
    <div class="add" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">Add Subject </div>
    </div>`;

      }else if(payload.designation == "student"){
    string2 += `<div id="id2" onclick="" class="subjectBox modclass" style="visibility:;">
    
    <div class="empty" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">Empty </div>
    </div><div id="id2" onclick="" class="subjectBox modclass" style="visibility:;">
    
    <div class="empty" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">Empty </div>
    </div><div id="id2" onclick="" class="subjectBox modclass" style="visibility:;">
    
    <div class="empty" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>
    <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">Empty </div>
    </div>`;

      }
    string2 += `</div></div>`;
    }else{
    
    string2 += `<div style="position:relative;"><div class="slide2">`;
    for(let i=0;i<reman2;i++){
    string2 += `<div id="id3" onclick="press2('${subjectsCards[totalquestion2].subject}','${subjectsCards[totalquestion2]._id}','${subjectsCards[totalquestion2].author}','${totalquestion2}')" class="subjectBox modclass" style="visibility:;">
        <div class="subjects" onclick="" style="font-size:;background-color:;margin:25px 0px 5px 0px;"></div>
        

        <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
        <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
          <div style="margin : 0 auto;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
            
          </div>
        </div>
      </div>


      <div class="marqueeMain" data-url="/page1.html" onclick="marqueeClick(this)" >
      <div class="marqueeContainerHorizontal marqueeContainer highlightiy" data-direction="horizontal">
        <div style="margin-left:50%;" class="marqueeTextHorizontal marqueeText">${subjectsCards[totalquestion2].subject} 
          
        </div>
      </div>
    </div>



    </div>`;
    // 
    // <div style="background-color:;font-size:px;margin:10px 5px 0px 5px;">${subjectsCards[totalquestion2].subject} </div>
    totalquestion2 = totalquestion2 - 1;
    }
    for(let i=0;i<extras2;i++){
    // console.log(payload.designation)
      if(payload.designation == "teacher"){
    string2 += `<div id="id2" onclick="press3()" class="subjectBox modclass" style="visibility:;">
    
    <div class="add" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>


    <div class="" data-url="" onclick="" >
    <div class=" highlightix " data-direction="">
      <div class=" ">Add Subject
      </div>
    </div>
  </div>



    </div>`;

      }else if(payload.designation == "student"){
    string2 += `<div id="id2" onclick="" class="subjectBox modclass" style="visibility:;">
    
    <div class="empty" onclick="" style="font-size:;background-color:;margin:20px 0px 0px 0px;"></div>


    <div class="" data-url="" onclick="" >
    <div class=" highlightix " data-direction="">
      <div class=" ">Empty
      </div>
    </div>
  </div>



    </div>`;

      }
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
    






//     getSubjects             getSubjects              getSubjects      
if((subjectsCards === ''||subjectsCards === null)||subjectsCards.length === 0 ){
        let designation = payload.designation;
        console.log("fthserehesrhehererhehrhehr");
        let subjectLine = "";
// if(designation === 'teacher'){
        subjectLine = "Please click to create a subject."

// }else if( designation === 'student'){
        // subjectLine = "Please request your teacher for a new subject."

// }

        let previousButton2 = document.getElementById("previous2");
        let nextButton2 = document.getElementById("next2");
            console.log("this is the if part");
                // quizContainer2.innerHTML = "<div style='background-color:red;height:200px;width:200px;'>There is nere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz datere is no quiz dato quiz data</div>";
                quizContainer2.innerHTML = 
         `<div style="position:relative;"><div class="introCard">
         <div id="id3" onclick="press3()" class="scoreBox modclass" style="visibility:;height:115px;padding:0px;">
           A New Session Has Started
                     <div style="background-color:;font-size:px;margin:0px 0px 0px 0px;">
                     ${subjectLine}
                       
       </div>
         </div>
        </div></div>`;
        // nextButton2.style.visibility = 'hidden';
        // previousButton2.style.visibility = 'hidden';
    previousButton2.style.display = 'none';
    nextButton2.style.display = 'none';
        }else{
                buildQuiz2();

        }














    const previousButton2 = document.getElementById("previous2");
    const nextButton2 = document.getElementById("next2");
    const slides2 = document.querySelectorAll(".slide2");
    let currentSlide2 = 0;
    
    showSlide2(currentSlide2);
    
    previousButton2.addEventListener("click", showPreviousSlide2);
    nextButton2.addEventListener("click", showNextSlide2);

    // function press2(rrr){
    function press2(subject,subjectId,subAut, subAll){
        // alert(subject);
        // alert(subjectId);
        localStorage.setItem("subsme", subject);
        localStorage.setItem("subjectId", subjectId);
        localStorage.setItem("subjectAuthor", subAut);
        localStorage.setItem("subjectPointer", subAll);
        console.log(subjectsCards[subAll])
        console.log(typeof subAll)
        // alert(rrr);
        // document.location = `/${rrr}.html`;
        // alert(rrr);
        // document.location = `/combi/class.html`;
      if(payload.designation == "teacher"){
        document.location = `/combi/class.html`;

      }else if(payload.designation == "student"){
        document.location = `/combi/subject.html`;

      }else{
        document.location = `/combi/pageDoesNotExist.html`;

      }
        // alert(JSON.stringify(subjectsCards[subAll]))
        // alert(JSON.stringify(subjectsCards[subAll]._id))
    }

    
    function press3(){
        document.location = `/combi/tfp.html`;
    }

    function press(subject,subjectId){
        // if( subject == 7777){
        //     document.location = `/combi/iurwhgi.html`;

        // }
        document.location = `/combi/${subject}.html`;
    }



    
      
      