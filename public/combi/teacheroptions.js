
        const subjectData = localStorage.getItem('subjectData');
    let data6 = JSON.parse(subjectData);
        // let data6 = [data10,data11,data12,data13,data14,data15];
    console.log([...new Set(data6.map(obj=>obj.degree))])
        document.getElementById('first').innerHTML = selectHtmlLookAgain([...new Set(data6.map(obj=>obj.degree))]);
    
        first.addEventListener('change',function(){
            console.log("first");
            let selected = first.value;
            console.log(selected);
            let department = getDepartmentArray(selected);
            document.getElementById('second').innerHTML = selectHtmlLookAgain(department);
        document.getElementById("third").innerHTML = '<option value="null">Please Select Branch</option>'
    
        });
    
        second.addEventListener('change',function(){
            let selected = second.value;
         getSemesterArray(selected);
    
        });
        
        function getDepartmentArray(depart){
        const depar = new Array([...new Set(data6.filter(obj=>obj.degree === depart).map(obj =>obj.branch))]);
            console.log(depar);
        let combi = [];
        // extraction of single length array to multi length array
        for(let i = 0; i<depar[0].length;i++){
            combi.push(depar[0][i]);
        }
            return combi;
        }
    
        function selectHtmlLookAgain(arrayValues){
            console.log(arrayValues);
        let str = "";
                str = `<option value='null'>Please Select</option>`;
            for(let i = 0; i<arrayValues.length;i++){
            str += `<option>${arrayValues[i]}</option>`;
            }
            str += "";
            return str;
        }
        
            function getSemesterArray(depart){
                console.log(depart);
        const depar = new Array([...new Set(data6.filter(obj=>obj.branch === depart).map(obj =>obj.semester))]);
            console.log(depar);
            // return depar;
            let xy = depar[0][0];
            console.log(xy)
            for(let x =0; x<xy;x++){
                console.log(x)
            }
        document.getElementById("third").innerHTML = selectHtmlLookAgain(depar[0]);
        }