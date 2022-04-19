           var MA=Math.floor(Math.random() * 3) + 1;
		   var MAN="";
		   var Mname="Dummy";
		   var MHP=30;
           var MAT=5;
           var MAW=30;
           var MAR=30;
           var MLC=30;
           var MST=30;
           document.getElementById("S1").innerHTML=Mname+" HP:"+MHP+" AT:"+MAT+" AW:"+MAW+" AR:"+MAR+" LC:"+MLC+" ST:"+MST;
           let btn=document.createElement("button");
           btn.innerHTML="ATACK";
           btn.style.position="absolute";
           btn.style.top="450px";
           btn.style.left="25px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",atack(Mname,MHP,MAT,MAW,MAR,MLC,MST,player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="DEFEND";
           btn2.style.position="absolute";
           btn2.style.top="450px";
           btn2.style.left="100px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",defend(Mname,MHP,MAT,MAW,MAR,MLC,MST,player), false);
           document.body.appendChild(btn2);
           let btn3=document.createElement("button");
           btn3.innerHTML="DODGE";
           btn3.style.position="absolute";
           btn3.style.top="450px";
           btn3.style.left="175px";
           btn3.style.backgroundImage="url('drewno.png')";
           btn3.setAttribute("id","btn3");
           btn3.addEventListener("click",dodge(Mname,MHP,MAT,MAW,MAR,MLC,MST,player), false);
           document.body.appendChild(btn3);
           let btn4=document.createElement("button");
           btn4.innerHTML="ESCAPE";
           btn4.style.position="absolute";
           btn4.style.top="450px";
           btn4.style.left="250px";
           btn4.style.backgroundImage="url('drewno.png')";
           btn4.setAttribute("id","btn4");
           btn4.addEventListener("click",escape(Mname,MHP,MAT,MAR,MLC,MST,player), false);
           document.body.appendChild(btn4);
           document.getElementById("S2").innerHTML=localStorage.getItem("P1name")+" HP:"+localStorage.getItem("P1HP")+" AT:"+localStorage.getItem("P1AT")+" AW:"+localStorage.getItem("P1AW")+" AR:"+localStorage.getItem("P1AR")+" LC:"+localStorage.getItem("P1LC")+" ST:"+localStorage.getItem("P1ST");
		   if(MA==1)
		   {
			  MAN='ATTACK';
		   }
		   if(MA==2)
		   {
			   MAN='DEFEND';
		   }
		   if(MA==3)
		   {
			   MAN='DODGE';
		   }
		   document.getElementById("S3").innerHTML="Next monster action will be "+MAN;