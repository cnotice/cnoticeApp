// currently used in enrollment.html
    function ok101(){
        document.getElementById('101').style.display="none";
    }
    
    function ok102(){
        document.getElementById('102').style.display="none";
    }
let num = 0 ;
const noOfStuButt = document.getElementById("noOfStuButt");

noOfStuButt.addEventListener("click", function(){
    if(noOfStu.value<1 || noOfStu.value>120){
    // alert("only from 0 to 120 are valid")
    document.getElementById("errorModal").innerHTML = `   <div id='101' style='z-index:3;display:;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);'>
    <div class='' style='
    border-radius:10px;
    box-shadow:4px 4px 6px rgba(0,0,0,.2);
    border:1px solid rgba(255,255,255,.20);margin-top:auto;margin-left:auto;margin-bottom:50px;margin-right:auto;background-color:#02013b;position:relative;padding:10px 10px 30px 10px;outline:0;width:80%; border-radius:5px;color:white;text-align: center;'><div style='padding-bottom: 20px;margin-top: 20px;'>
    only from 0 to 120 are valid
    </div>
       
    
    <div style='text-align:center;'>
 <button class="button0 " onclick='ok101()'>Ok</button>
    </div>
    </div>
    </div>`;
}else{
    // alert(noOfStu.value);
    
    num = document.getElementById("noOfStu").value;
        let tabl = "";

        tabl = `  <div id='102' style='z-index:3;display:;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);'>
        <div class='' style='
        border-radius:10px;
        box-shadow:4px 4px 6px rgba(0,0,0,.2);
        border:1px solid rgba(255,255,255,.20);margin-top:auto;margin-left:auto;margin-bottom:50px;margin-right:auto;background-color:#02013b;position:relative;padding:10px 10px 30px 10px;outline:0;width:60%; border-radius:5px;color:white;text-align: center;'><div style='padding-bottom: 20px;margin-top: 20px;'>
        Please enter student's roll number only and do not enter names.
        </div>
           
        
        <div style='text-align:center;'>
     <button class="button0 " onclick='ok102()'>Ok</button>
        </div>
        </div>
        </div>
        
        <section class="tablecontent">
<table id='tabla'>
<tr>
<th>Sl no</th>
<th>roll no</th>
 </tr>`;

    for(let i=1;i<=noOfStu.value;i++){
        tabl += ` 
<tr>
<td>${i}</td>
<td><input class="input0 input8a" id="myInput${i}"><div class="sugge" id="${i}myInput" style="position:relative;"></div> </td>


</tr>`
    }
  


tabl +=` </table>
<div style="height:60px;"></div>
<button class="button0" onclick="makeNewAttRow()" style="color:"> add one student </button>
<button class="button0" style="color:"> Cancel</button>
<button class="button0" style="color:" onclick="myFunction()" id="updateRegistration"> Save</button>`;



document.getElementById("reveal").innerHTML = tabl;
document.getElementById("noOfStuSection").style.display = "none";
}
})




function makeNewAttRow(){

    kam = document.getElementById("noOfStu").value;
    if(kam == 120){
       alert("The number of students is higher than expected, please inform institue to tacle difficulties later.") ;
    }
   console.log(noOfStu.value);
   console.log(num);
num = parseInt(num) + parseInt(1);
console.log(num);
var tr = document.createElement("TR");
var td = document.createElement("TD");
td.className = "newtrcolor";
var t = document.createTextNode(num);
td.appendChild(t);
var td2 = document.createElement("TD");
td2.className = " newtrcolor ";
tr.appendChild(td);
tr.appendChild(td2);
var inp = document.createElement("INPUT");
inp.className = "input0 newtrcolor input8a";
td2.appendChild(inp);
document.getElementById("tabla").appendChild(tr); 

}


//////291023

function pullinsert(changeddata,id){
    document.getElementById(id).value = changeddata;
    }
    
    function closeAllLists(elmnt) {
    let id = elmnt.id;
    let maincomp = document.getElementById("compmain");
    if(maincomp){
    maincomp.parentNode.removeChild(maincomp);
    }
    let tag = elmnt.tagName;
    if( tag == "INPUT"){
    var pattern = /[0-9]+/g;
    var result = id.match(pattern);
    if(result != null){
    var numid = parseInt(result[0]);
    let idnum = numid-1;
    if(idnum > 0 ){
    prevNo = "myInput" + idnum;
    noRev = numid + "myInput";
    inpval = document.getElementById(prevNo).value;
    var resu = inpval.match(pattern);
    if(resu != null){
    var part1 = parseInt(resu[0]);
    var zumpart = part1 + 1;
    var change = inpval.replace(resu[0],zumpart);
    let maincomp = document.getElementById("compmain");
    if(resu[1] != null){
    var part2 = parseInt(resu[1]);
    var zumpart2 = part2 + 1;
    var change2 = inpval.replace(resu[1],zumpart2);
     document.getElementById(noRev).innerHTML = '<div id="compmain" ><div class="comp" onclick="pullinsert(\''+change+'\' ,\''+id+'\')" style="position:absolute;padding-top:;top:0px;background-color:;border:;" class="auto" >'+change+'</div><div onclick="pullinsert(\''+change2+'\' ,\''+id+'\')" class="comp" style="position:absolute;padding-top:;top:40px;background-color:;border:;" class="auto" >'+change2+'</div> </div>';
    }else{
     document.getElementById(noRev).innerHTML = '<div id="compmain" ><div class="comp" onclick="pullinsert(\''+change+'\' ,\''+id+'\')" style="position:absolute;padding-top:;top:0px;background-color:;border:;" class="auto" >'+change+'</div></div>';
         }
            }
            }
            }
    }
    }
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });

      //////291023
function myFunction() {
    let rcount = document.getElementById("tabla").rows.length;

let tabdata = "";
for(let i=1; i<rcount;i++){
tabdata += document.getElementById("tabla").rows[i].cells[1].getElementsByTagName("input")[0].value;
}
alert(tabdata);
}











////////////////////////////////////////////////301124

const subjectId = localStorage.getItem('subjectId');

document.body.addEventListener('click', function(event){
    if(event.target && event.target.id === 'updateRegistration')
    {
console.log("here1");
////////////////////////////////////////////////260824

// updateRegistration.addEventListener('click', ()=>{ //301124
    console.log("here12");


    let rcount = document.getElementById("tabla").rows.length;

let tabdata = "";
let array = [];
for(let i=1; i<rcount;i++){
// tabdata += document.getElementById("tabla").rows[i].cells[1].getElementsByTagName("input")[0].value;

array.push({roll : document.getElementById("tabla").rows[i].cells[1].getElementsByTagName("input")[0].value})
// array.push({roll : document.getElementById("tabla").rows[i].cells[1].getElementsByTagName("input")[0].value, name: "unregistered"})
}



    // let div = document.getElementById("displayData");
    // let inputs = div.querySelectorAll('input');

    // let array = [];
    // inputs.forEach(input=>{
    //            array.push({roll:input.value, name: "unregistered"})
    // })
let url = "/updateRegistration ";
let sendData = {
    subjectId : subjectId, 
    // subjectattendance : subjectId, 
author : 'teacher',
registration : array
}

let h = new Headers();
        h.append('Content-Type', 'application/json')
let req = new Request(url,{
    method: 'PATCH',

    headers: h
    ,
    body: JSON.stringify(sendData)
    
})

// fetch(req).then(res=>res.json()).then((data)=>{
//     console.log(data.fff);
//     localStorage.setItem("subjects", JSON.stringify(data.fff));

// })

    // //////////////////////////local
    // const updateLocalStorageWithSecondPart = async () => {
    //     try {
    //         // Step 1: Fetch data from the server
    //         const response = await fetch(req); // Replace with your API endpoint
    //         const serverData = await response.json();
    
    //         // console.log(serverData.fff);
    //         // console.log(serverData);
    //         // Step 2: Extract the second part
    //         const secondPart = serverData.fff || {}; // Default to an empty array if `part2` is missing
    
    //         // Step 3: Get and parse existing localStorage data
    //         let localData = localStorage.getItem('subjects');
    //         localData = localData ? JSON.parse(localData) : [];
    
    //         // new step 4
    //     const updatedSubjects = { ...localData, ...secondPart };
    //     // Step 4: Iterate over `secondPart` and update/merge local data
    //     // Object.values(secondPart).forEach(serverItem => {
    //     //         // Find the item in local storage by ID
    //     //         const index = localData.findIndex(localItem => localItem.id === serverItem.id);
    
    //     //         if (index !== -1) {
    //     //             // Merge server data into the existing item
    //     //             localData[index] = { ...localData[index], ...serverItem };
    //     //         } else {
    //     //             // If not found, add the new server item
    //     //             localData.push(serverItem);
    //     //         }
    //     //     });
    
    //         // Step 5: Save the updated data back to localStorage
    //         localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
    
    //         console.log('Updated local storage data:', localData);
    //     } catch (error) {
    //         console.error('Error updating localStorage:', error.message);
    //     }
    // };
    
    // // Call the function
    // updateLocalStorageWithSecondPart();
    
    const updateLocalStorageById = async () => {
        try {
            // Step 1: Fetch data from the server
            const response = await fetch(req); // Replace with your API endpoint
            const serverData = await response.json();
    
            // Step 2: Extract `fff` part (new subject data) from the server response
            const newSubjectData = serverData.fff || {}; // Ensure it's an object
            const subjectId = newSubjectData._id; // Use the `_id` field from `fff`
    
            if (!subjectId) {
                console.error('No ID found in the server data.');
                return;
            }
    
            // Step 3: Retrieve existing `subjects` data from localStorage
            let subjects = localStorage.getItem('subjects');
            subjects = subjects ? JSON.parse(subjects) : [];
    
            // Step 4: Check if the subject with the given ID exists
            const index = subjects.findIndex(subject => subject._id === subjectId);
    
            if (index !== -1) {
                // Update the existing subject
                subjects[index] = { ...subjects[index], ...newSubjectData };
            } else {
                // Add the new subject if not found
                subjects.push(newSubjectData);
            }
    
            // Step 5: Save the updated `subjects` data back to localStorage
            localStorage.setItem('subjects', JSON.stringify(subjects));
    
            console.log('Updated subjects data:', subjects);
        } catch (error) {
            console.error('Error updating localStorage:', error.message);
        }
    };
    
    // Call the function
    updateLocalStorageById();
    

    // ///////////////////////local
// }) //301124
/////////////////////////////////////////////////260824
    }
})

////////////////////////////////////////////////301124






