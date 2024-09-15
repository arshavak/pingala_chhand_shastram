function gan(){
document.getElementById("fl").innerHTML="";
var x = document.getElementById("falani").innerText;
x=x.match(/.{1,3}/g);
var falam = document.getElementById("fl");
document.getElementById("SI_vichched").innerText=x;
for(var i = 0; i<x.length; i++){
if(x[i]=="ISI"){
falam.innerHTML+=`<b class="alrt" onclick="alert('कदा स ज्')">जगण</b>`;
}else
if(x[i]=="SSS"){
falam.innerHTML+= `<b class="alrt" onclick="alert('धीश्रीस्त्री म्')">मगण</b>`;
}else
if(x[i]=="ISS"){
falam.innerHTML+=`<b class="alrt" onclick="alert('वरा सा य्')">यगण</b>`;
}else

if(x[i]=="SIS"){
falam.innerHTML+=`<b class="alrt" onclick="alert('का गुहा र्')">रगण</b>`;
}else

if(x[i]=="IIS"){
falam.innerHTML+=`<b class="alrt" onclick="alert('वसुधा स्')">सगण</b>`;
}else

if(x[i]=="SSI"){
falam.innerHTML+=`<b class="alrt" onclick="alert('सा ते क्व त्')">तगण</b>`;
}else

if(x[i]=="SII"){
falam.innerHTML+=`<b class="alrt" onclick="alert('किं वद भ्')">भगण</b>`;
}else

if(x[i]=="III"){
falam.innerHTML+=`<b class="alrt" onclick="alert('न हसन्')">नगण</b>`;
}else

if(x[i]=="S"){
falam.innerHTML+=`<b class="alrt" onclick="alert('गन्ते , ध्रादिपरः , हे ')">गुरु</b>`;
}else

if(x[i]=="SS"){
falam.innerHTML+=`<b class="alrt" onclick="alert('गन्ते , ध्रादिपरः , हे ')">गुरुगुरु</b>`;
}else

if(x[i]=="SI"){
falam.innerHTML+=`<b class="alrt" onclick="alert('लघुगुरु')"> गुरुलघु</b>`;
}else

if(x[i]=="IS"){
falam.innerHTML+=`<b class="alrt" onclick="alert('लघुगुरु ')">लघुगुरु </b>`;
}else

if(x[i]=="II"){
falam.innerHTML+=`<b class="alrt" onclick="alert('लघु लघु')">लघु लघु</b>`;
}else

if(x[i]=="I"){
falam.innerHTML+=`<b class="alrt" onclick="alert('लघु')">लघु</b>`;
}else{
falam.innerHTML="......";
}}}
