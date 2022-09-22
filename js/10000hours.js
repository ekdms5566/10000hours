function calcTime(){
    const loading = document.querySelector(".loading-result");
    const result = document.querySelector(".cont-result");
    const resultWannabe = document.getElementById("result-wannabe");
    const resultTime = document.getElementById("result-time");
    let inpWannabe =document.getElementById("inp-wannabe").value;
    let inpTime = Number(document.getElementById("inp-time").value);
    
    if(inpWannabe == ""){
        alert("내용을 입력하세요.");
        return false;
    } else if(inpTime == ""){
        alert("내용을 입력하세요.");
        return false;
    } else{
        loading.style.display = "block";
    }

    setTimeout(()=>{
        loading.style.display="none";
        result.style.display="block";
        resultWannabe.innerText=inpWannabe;
        resultTime.innerText=parseInt((10000/inpTime),10);
    }, 2000);
    
}

document.querySelector(".btn-go").addEventListener("click",()=>{
    document.getElementById("modal").style.display = 'flex';
})

document.querySelector(".modal-close").addEventListener("click",()=>{
    document.getElementById("modal").style.display = 'none';
})
