// currently used in signin html
{/* <script> */}
    
// signin.addEventListener('click', ()=>{

// let url = "/users ";
// let name = document.getElementById('name').value;    
// let password = document.getElementById('password').value;  
// let designation = document.getElementById('designation').value;    
// console.log(designation)
// let sendData = {
//     name,
//     designation,
//     password
// }

// let h = new Headers();
//         h.append('Content-Type', 'application/json')
// let req = new Request(url,{
//     method: 'POST',
//      headers: h,
//     body: JSON.stringify(sendData)
// })

//     fetch(req).then(res=>res.json()).then((data)=>{
//         localStorage.setItem("authToken", data.token);
//         console.log(data);
//         console.log(JSON.stringify(data));
// })
// })

        {/* </script> */}
trycontact.addEventListener("click",(e)=>{
        // let url = "/formFillUp";
        // alert("hello");
        let url = "/users ";
        const recruiter = document.getElementById("contactnum").value ;
        const desi = document.getElementById("designation").value ;

        
        // const formid = document.getElementById("form") ;
        // const getmydata = document.getElementsByName("name")[0].value ;

        const name = document.getElementsByName("name")[0].value ;
        const email = document.getElementsByName("email")[0].value ;
        const phone = document.getElementsByName("phone")[0].value ;
        const password = document.getElementsByName("password")[0].value ;

        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(password)
        console.log(recruiter)

        // const condata = {
        //     contact: cont,
        //     designation : desi,
        //     name : name,
        //     email : email,
        //     phone : phone,
        //     password : password
        // }
    let sendData = {
        name,
        designation,
        password,
        recruiter
    }

    
let h = new Headers();
h.append('Content-Type', 'application/json')
let req = new Request(url,{
// create
method: 'POST',
headers: h
,
body: JSON.stringify(sendData)
})

    console.log(sendData);
        // fetch(url ,{
        //     method: 'POST',
        //     headers : {
        //         'Content-Type': 'application/json'
        //     },
        // //     body: JSON.stringify(condata)
        // // })
        // body: JSON.stringify(sendData)
    // })
    
    fetch(req).then(res=>res.json()).then((data)=>{
        localStorage.setItem("authToken", data.token);
        console.log(data);
        console.log(JSON.stringify(data));
    // document.getElementById('data').innerHTML = data;
// })
//         .then(res=>res.text())
//         .then((data)=> 
//         {
                    localStorage.setItem("authToken", data.token);
                    console.log(data.token);
                    console.log(JSON.stringify(data));
//             if(data == 'ok'){
// document.getElementById("code").style.display = "none";
// document.getElementById("form").style.display = "block";
//             }else{
//             console.log(data);
// document.getElementById("code").style.display = "none";
// document.getElementById("error").style.display = "block";
//             }
        //     console.log("welcome fishi" + data);
        // localStorage.setItem("authToken", data.token);
        window.location.href = data.redirect
    }
    )

    
    })



loginsubmit.addEventListener("click",(e)=>{
    // alert("loginsubmit (id error)");
        // let url = "/login";
let url = "/users/login";
        const name = document.getElementById("userid").value ;
        const password = document.getElementById("userpassword").value ;
        const logindata = {
            // email: name,
            name: name,
            password: password
        }
        fetch(url ,{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(logindata)
        }).then(res=>res.json())
        .then((data)=> 
        {
            console.log("welcome fishi" + data);
        // document.getElementById("login").innerHTML = JSON.stringify(data);
        //save token in session
        localStorage.setItem("authToken", data.token);
        console.log(data.redirect);
        window.location.href = data.redirect
    }


    )
    // 
    // .then(res=>res.json())
    // .then((data)=> window.location.href = data.redirect
    // )
// 
    })




function login(){
document.getElementById("register").style.display = "none";
document.getElementById("login").style.display = "block";
}


function register(){
document.getElementById("register").style.display = "none";
// document.getElementById("occupation").style.display = "block";
document.getElementById("form").style.display = "block";
}




function next(){
// document.getElementById("register").style.display = "none";

// document.getElementsByName('name')[0].validity.valid ;
// document.getElementsByName('email')[0].validity.valid ;
// document.getElementsByName('phone')[0].validity.valid ;
// document.getElementsByName('password')[0].validity.valid ;


let check1 = document.getElementsByName('name')[0].validity.valid ;
// let check2 = document.getElementsByName('email')[0].validity.valid ;
// let check3 = document.getElementsByName('phone')[0].validity.valid ;
let check4 = document.getElementsByName('password')[0].validity.valid ;
// if(check1 && check2 && check3 && check4 != ""){
    if(check1 && check4 != ""){
let check99 = document.getElementsByName('password')[0].value ;
console.log(check99);
let check98 = document.getElementsByName('repassword')[0].value ;
console.log(check98);
if((check99.length < 6 )|| (check98.length < 6)){
alert("you cannot proceed with password length less than 6 characters");

}else{

if(check99 !== check98){
alert("Password mismatch");

}else{
    document.getElementById("form").style.display = "none";
document.getElementById("occupation").style.display = "block";
}
}

}else{
alert("you cannot proceed with an empty input (id error)");
}


}




var designation;
function inst(){
    designation = "institute";
document.getElementById("occupation").style.display = "none";
document.getElementById("code").style.display = "block";
document.getElementById("designation").value = designation;
}

function teac(){
    designation = "teacher";
document.getElementById("occupation").style.display = "none";
document.getElementById("code").style.display = "block";
document.getElementById("designation").value = designation;
}
function stud(){
    designation = "student";
document.getElementById("occupation").style.display = "none";
document.getElementById("code").style.display = "block";
document.getElementById("designation").value = designation;
}

function pare(){
    designation = "parents";
document.getElementById("occupation").style.display = "none";
document.getElementById("code").style.display = "block";
document.getElementById("designation").value = designation;

}
