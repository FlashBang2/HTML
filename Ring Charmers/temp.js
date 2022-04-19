function atack (NM,MHP,MAT,MAW,MAR,MLC,MST,a)
{
 MHP=MHP-PAT;
 PHP=PHP-MAT;
 if(PHP<=0 || MHP<=0)
 {
  document.getElementById("S1").innerHTML="";
  document.getElementById("S2").innerHTML="";
  document.getElementById("btn1").remove();
  document.getElementById("btn2").remove();
  document.getElementById("btn3").remove();
  document.getElementById("btn4").remove();
 }
 else
 {
 document.getElementById("S1").innerHTML=NM+" HP:"+MHP+" AT:"+MAT+" AW:"+MAW+" AR:"+MAR+" LC:"+MLC+" ST:"+MST;
 document.getElementById("S2").innerHTML=Pname+" HP:"+PHP+" AT:"+PAT+" AW:"+PAW+" AR:"+PAR+" LC:"+PLC+" ST:"+PST;
 }
}
function defend (NM,MHP,MAT,MAW,MAR,MLC,MST,a)
{
 
 if (PHP<=0 || MHP<=0)
 {
  document.getElementById("S1").innerHTML="";
  document.getElementById("S2").innerHTML="";
  document.getElementById("btn1").remove();
  document.getElementById("btn2").remove();
  document.getElementById("btn3").remove();
  document.getElementById("btn4").remove();
 }
 else
 {
	 
 }
}
function dodge (NM,MHP,MAT,MAW,MAR,MLC,MST,a)
{
 if (PHP<=0 || MHP<=0)
 {
document.getElementById("S1").innerHTML="";
  document.getElementById("S2").innerHTML="";
  document.getElementById("btn1").remove();
  document.getElementById("btn2").remove();
  document.getElementById("btn3").remove();
  document.getElementById("btn4").remove();
 }
}
function escape (NM,MHP,MAT,MAW,MAR,MLC,MST,a)
{
  if (PHP<=0 || MHP <=0)
  {
  document.getElementById("S1").innerHTML="";
  document.getElementById("S2").innerHTML="";
  document.getElementById("btn1").remove();
  document.getElementById("btn2").remove();
  document.getElementById("btn3").remove();
  document.getElementById("btn4").remove(); 
  }
}