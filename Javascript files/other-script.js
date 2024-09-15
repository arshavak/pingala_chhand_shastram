//<script src="Javascript files/gan-script.js"></script>
function show(){
var cont = document.getElementById("contaner");
var btntext = document.getElementById("show-btn");
if(cont.style.width !== "0px"){
cont.style.display = "none"
cont.style.width = "0px";
cont.style.height = "0px";
btntext.innerText = "तन्त्रं बहिरानय"
}else{
cont.style.display = "block"
cont.style.width = "";
cont.style.height = "";
btntext.innerText = "तन्त्रमन्तर्निधेहि"
    }
}
