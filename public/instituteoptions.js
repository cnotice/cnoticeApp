
        const subjectData = localStorage.getItem('degreeData');
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
         getSemesterArray(selected);
        });
    
        function getDepartmentArray(depart){
        const depar = new Array([...new Set(data6.filter(obj=>obj.degree === depart).map(obj =>obj.department))]);
        // console.log(departt);
            console.log(depar);
        let combi = [];
        // extraction of single length array to multi length array
        for(let i = 0; i<depar[0].length;i++){
            combi.push(depar[0][i]);
        }
            return combi;
        }
    
        function selectHtmlLookAgain(arrayValues){
        let str = "";
                str = `<option value='null'>Please3 Select</option>`;
            for(let i = 0; i<arrayValues.length;i++){
            str += `<option>${arrayValues[i]}</option>`;
            }
            str += "";
            return str;
        }
        
            function getSemesterArray(depart){
        const depar = new Array([...new Set(data6.filter(obj=>obj.degree === depart).map(obj =>obj.semester))]);
            let xy = depar[0][0];
            console.log(xy);
            console.log(depar);
            console.log(data6);
        let combi = [];
            for(let x =1; x<=xy;x++){
                combi.push(x);
            }
            document.getElementById('third').innerHTML = selectHtmlLookAgain(combi);
        }
