// used in iifp.html
inscreate.addEventListener('click', (e)=>{
    e.preventDefault();
    const url = '/stucode';
    const token = localStorage.getItem("authToken");
    const con = document.getElementById("contactcode").value;
    let h = new Headers();
        h.append('Authorization' ,`Bearer ${token}`);
        h.append('Content-Type', 'application/json');
    fetch(`${url}`,{
            method: 'POST',
            headers : h,
            body: JSON.stringify({contactcode : con})
        })
        .then(res=>res.json())
        .then((data)=> window.location.href = data.redirect)
})





    function xform(){
        document.getElementById('creator').style.display = 'none';
        document.getElementById('creation').style.visibility = 'visible';
    }
    