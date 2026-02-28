function enforceMaxMin(input){

    let value = input.value;
    value = value.replace(/[^0-9]/g, '');

    if(value.length>1){
        value = value.replace(/^0+/, '');
    }

    if(value !== ''){
        let num = parseInt(value, 10);
        if(num<0) value = "0";
        if(num>20) value = "20";
    }

    input.value = value;
    // const min = input.getAttribute("min");
    // const max = input.getAttribute("max");
    // if(input.value < min){
    //     input.value = min;
    // }else if(input.value > max){
    //     input.value = max;
    // }
        
}



function blockInvalidKeys(event){
    if(event.key === "e" || event.key === "E" ||event.key === "+" || event.key === "-" ){
        event.preventDefault();
    }
}

    
// let noticetext = document.querySelector('.classIdText');
// let classIdTextCount = document.querySelector('.classIdTextCount');
// // var box = document.getElementById('noticetext');

// var charlimit = 40;
// var linelimit = 5; 
// noticetext.value = "";
// noticetext.onkeyup = function() {
// var lines = noticetext.value.split('\n');
// for (var i = 0; i < lines.length; i++) {
// if (lines[i].length <= charlimit) 
// continue;
// var j = 0; space = charlimit;
// while (j++ <= charlimit) {
// if (lines[i].charAt(j) === ' ') 
// space = j;
// }
// lines[i + 1] = lines[i].substring(space + 1) + (lines[i + 1] || "");
// lines[i] = lines[i].substring(0, space);

// }
// console.log("lines");
// console.log(lines.length)
// console.log("char");
// console.log(noticetext.value.length);
// noticetext.value = lines.slice(0,linelimit ).join('\n');
// classIdTextCount.innerHTML = lines.length + "/5 lines" + " | " + noticetext.value.length +"/200 characters";

// };





// document.querySelectorAll(".charLimit").forEach((textarea,index)=>{
//     const counter = document.querySelectorAll(".charCount")[index];
    document.querySelectorAll(".classIdText").forEach((textarea,index)=>{
        const counter = document.querySelectorAll(".classIdTextCount")[index];
        const maxLength = parseInt(textarea.getAttribute("data-maxlength"),10);
        const maxLine = parseInt(textarea.getAttribute("data-maxline"),10);
        
        if(maxLength){
            var charlimit = maxLength;
            var linelimit = maxLine; 
        }else{
            var charlimit = 40;
            var linelimit = 5; 
        }

// let noticetext = document.querySelector('.classIdText');
// let classIdTextCount = document.querySelector('.classIdTextCount');

textarea.value = "";
textarea.onkeyup = function() {
var lines = textarea.value.split('\n');
for (var i = 0; i < lines.length; i++) {
if (lines[i].length <= charlimit) 
continue;
var j = 0; space = charlimit;
while (j++ <= charlimit) {
if (lines[i].charAt(j) === ' ') 
space = j;
}
lines[i + 1] = lines[i].substring(space + 1) + (lines[i + 1] || "");
lines[i] = lines[i].substring(0, space);

}
textarea.value = lines.slice(0,linelimit ).join('\n');

if(maxLength){
    // counter.innerHTML =  input.value.length +"/"+`${maxLength}`;
    counter.innerHTML = lines.length + "/"+`${linelimit}` +" lines" + " | " + textarea.value.length +"/"+`${charlimit*linelimit}`+" characters" ;
}else{
    // counter.innerHTML =  input.value.length +"/30";
    counter.innerHTML = lines.length + "/5 lines" + " | " + textarea.value.length +"/200 characters";
}

};







    // textarea.addEventListener("input", ()=>{
    //     let length = textarea.value.length;
    //     counter.textContent = `${length}/200`;

    //     if(length>2){
    //         textarea.value = textarea.value.substring(0,2);
    //         counter.textContent = "200/200";
    //     }

    // });
});




// let box = document.querySelector('.classIdKeys');
// console.log(box);
// // var box = document.getElementById('keys');
// var charlimit = 30; // char limit per line
// var linelimit = 1; // char limit per line
// box.value = "";
// box.onkeyup = function() {
// var lines = box.value.split('\n');
// for (var i = 0; i < lines.length; i++) {
// if (lines[i].length <= charlimit) 
// continue;
// var j = 0; space = charlimit;
// while (j++ <= charlimit) {
//     if (lines[i].charAt(j) === ' ') 
//     space = j;
// }
// lines[i + 1] = lines[i].substring(space + 1) + (lines[i + 1] || "");
// lines[i] = lines[i].substring(0, space);

// }
// console.log("lines");
// console.log(lines.length)
// console.log("char");
// console.log(box.value.length);
// box.value = lines.slice(0,linelimit ).join('\n');
// document.getElementById("count").innerHTML =  box.value.length +"/30";

// };

document.querySelectorAll(".classIdKeys").forEach((input,index)=>{
    const maxLength = parseInt(input.getAttribute("data-maxlength"),10);
    const counter = document.querySelectorAll(".classIdTextCountKeys")[index];

    if(maxLength){
        var charlimit = maxLength;
    }else{
        var charlimit = 30;
    }
var linelimit = 1; 
input.value = "";
input.onkeyup = function() {
var lines = input.value.split('\n');
for (var i = 0; i < lines.length; i++) {
if (lines[i].length <= charlimit) 
continue;
var j = 0; space = charlimit;
while (j++ <= charlimit) {
if (lines[i].charAt(j) === ' ') 
space = j;
}
lines[i + 1] = lines[i].substring(space + 1) + (lines[i + 1] || "");
lines[i] = lines[i].substring(0, space);

}
// textarea.value = lines.slice(0,linelimit ).join('\n');
// counter.innerHTML = lines.length + "/5 lines" + " | " + textarea.value.length +"/200 characters";
input.value = lines.slice(0,linelimit ).join('\n');

if(maxLength){
    counter.innerHTML =  input.value.length +"/"+`${maxLength}`;
}else{
    counter.innerHTML =  input.value.length +"/30";
}

};
});


document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll("input, textarea").forEach((el)=>{
        el.setAttribute("autocomplete", "off");
        el.setAttribute("spellcheck", "false");
    });
});
