function lg(){
document.getElementById("ktmtest").innerHTML ="";
var m = document.getElementById("falani").innerText;
for(var i = 0; i<m.length; i++){
if (m[i]=="I"){
var r = 2**i;
document.getElementById("ktmtest").innerHTML += r+" ";
}}  
var y = document.getElementById("ktmtest").innerText;
y=String(y);
y=y.split(" ");
y=eval(y.join('+'))+1;
if(m.includes("I")==false){y=1;}
if(m==""){y=0;}
document.getElementById("prakritobhedah").value= y;

if(i==1 && y==1){
document.getElementById("vname").value= "श्रीः" 
}else

if(i==2 && y==1){
document.getElementById("vname").value= "धीः" 
}else

if(i==3  &&  y==1){
document.getElementById("vname").value= "स्त्री" ;
}else

if(i==4  &&  y==1){
document.getElementById("vname").value= "सुमतिः" ;
}else

if(i==5  &&  y==7){
document.getElementById("vname").value= "पङ्क्तिः" ;
}else

if(i==6  &&  y==13){
document.getElementById("vname").value= "तनुमध्या" ;
}else

if(i==7  &&  y==30){
document.getElementById("vname").value= "कुमारललिता" ;
}else

if(i==8  &&  y==103){
document.getElementById("vname").value= "माणवकाक्रीडितकम्" ;
}else

if(i==8  &&  y==55){
document.getElementById("vname").value= "चित्रपदा" ;
}else

if(i==8  &&  y==1){
document.getElementById("vname").value= "विद्युन्माला" ;
}else

{document.getElementById("vname").value= "गाथा" }

}
