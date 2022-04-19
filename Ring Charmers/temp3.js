switch (Math.floor(Math.random() * 20) + 1)
           {
           case 1:
           {
           document.getElementById("S1").innerHTML="The cave you were in starts to tremble.</br> In desperation you decided to.";
           let btn=document.createElement("button");
           btn.innerHTML="Run for your life";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE1(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Prepare for a hit";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE1(player), false);
           document.body.appendChild(btn2);
           break;
           }
           case 2:
           {
           document.getElementById("S1").innerHTML="You meet on your way to castle a plague doctor.</br> He offers you a potion in exchange for bringing his goods to a castle.";
           let btn=document.createElement("button");
           btn.innerHTML="Grab red vial";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE2(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Grab green vial";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE2(player), false);
           document.body.appendChild(btn2);
           break;
           }
           case 3:
           {
           document.getElementById("S1").innerHTML="Fleeing soldier goes by you dropping his sword on a floor.";
           let btn=document.createElement("button");
           btn.innerHTML="You look at sword";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE3(player), false);
           document.body.appendChild(btn);
           break;
           }
           case 4:
           {
           document.getElementById("S1").innerHTML="On your quest to save a princess you stumble upon an important choice.</br> Ahead there is a fork in a road and signs saying where the road from there leads to.";
           let btn=document.createElement("button");
           btn.innerHTML="Choose road leading to glass tower";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE4(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Choose road leading to dragon nest";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE4(player), false);
           document.body.appendChild(btn2);
           let btn3=document.createElement("button");
           btn3.innerHTML="Choose road leading to bandits camp";
           btn3.style.position="absolute";
           btn3.style.top="540px";
           btn3.style.left="50px";
           btn3.style.backgroundImage="url('drewno.png')";
           btn3.setAttribute("id","btn3");
           btn3.addEventListener("click",RE4(player), false);
           document.body.appendChild(btn3);
           break;
           }
           case 5:
           {
           document.getElementById("S1").innerHTML="You stumble upon a necromancer which holds powerful staff.";
           let btn=document.createElement("button");
           btn.innerHTML="Fight necromancer to gain stuff";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE5(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Leave necromancer be";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE5(player), false);
           document.body.appendChild(btn2);
           break;
           }
           case 6:
           {
           document.getElementById("S1").innerHTML="When chilling on town square </br> you see young paladin abandoning crossbow in dark corner of a street.";
           let btn=document.createElement("button");
           btn.innerHTML="Get up and go grab a crossbow";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE6(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Keep on chilling";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE6(player), false);
           document.body.appendChild(btn2);
           break;
           }
           case 7:
           {
           document.getElementById("S1").innerHTML="You are not happy from terms of a quest that's why you want.";
           let btn=document.createElement("button");
           btn.innerHTML="Bigger reward";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE7(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Fewer objectives";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE7(player), false);
           document.body.appendChild(btn2);
           break;
           }
           case 8:
           {
           document.getElementById("S1").innerHTML="A arrow lands next to your feet.</br> You have weird feeling that next one is already coming.";
           let btn=document.createElement("button");
           btn.innerHTML="Run away";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE8(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Brace yourself";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE8(player), false);
           document.body.appendChild(btn2);
           break;
           }
           case 9:
           {
           document.getElementById("S1").innerHTML="Lately you haven't felt really great you assume that </br> it must have something to do with illness which is spreading through kingdom.";
           let btn=document.createElement("button");
           btn.innerHTML="It's time to rest";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE9(player), false);
           document.body.appendChild(btn);
           break;
           }
           case 10:
           {
           document.getElementById("S1").innerHTML="Nimfa tricks you to search golden medallion in exchange for her blessing.</br> However you learn in local library that it doesn't exist";
           let btn=document.createElement("button");
           btn.innerHTML="Confront Nimfa with her lies";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE10(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Try to forger golden medallion";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE10(player), false);
           document.body.appendChild(btn2);
           break;
           }
           case 11:
           {
           document.getElementById("S1").innerHTML="When doing quest in cave your leg triggers goblins trap which makes you run for your life.";
           let btn=document.createElement("button");
           btn.innerHTML="That's going to hurt";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE11(player), false);
           document.body.appendChild(btn);
           break;
           }
           case 12:
           {
           document.getElementById("S1").innerHTML="Playing with local gambler on paper seems like bad idea but </br> you instead don't believe local gossips and decided to win in his game of finding rock under three cups.";
           let btn=document.createElement("button");
           btn.innerHTML="Choose cup1";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE12(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Choose cup2";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE12(player), false);
           document.body.appendChild(btn2);
           let btn3=document.createElement("button");
           btn3.innerHTML="Choose cup3";
           btn3.style.position="absolute";
           btn3.style.top="540px";
           btn3.style.left="50px";
           btn3.style.backgroundImage="url('drewno.png')";
           btn3.setAttribute("id","btn3");
           btn3.addEventListener("click",RE12(player), false);
           document.body.appendChild(btn3);
           break;
           }
           case 13:
           {
           document.getElementById("S1").innerHTML="You stumble upon hanging corpse.";
           let btn=document.createElement("button");
           btn.innerHTML="Loot corpse";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE13(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Don't profane corpse";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE13(player), false);
           document.body.appendChild(btn);
           break;
           }
           case 14:
           {
           document.getElementById("S1").innerHTML="While you were leaving a village you spot a merchant from far east which sells katanas.";
           let btn=document.createElement("button");
           btn.innerHTML="Take a look on his goods";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE14(player), false);
           document.body.appendChild(btn);
           break;
           }
           case 15:
           {
           document.getElementById("S1").innerHTML="Some say that fighting dragon will earn you a glory money and beautiful princess.</br> However now your ass is on fire and it isn't pleasing feeling.";
           let btn=document.createElement("button");
           btn.innerHTML="Ouch!";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE15(player), false);
           document.body.appendChild(btn);
           break;
           }
           case 16:
           {
           document.getElementById("S1").innerHTML="Young boy is playing game on a field called guess from which hole rabbit will put his head through.";
           let btn=document.createElement("button");
           btn.innerHTML="First one on left";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE16(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="First one on right";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE16(player), false);
           document.body.appendChild(btn2);
           break;
           }
           case 17:
           {
           document.getElementById("S1").innerHTML="You have been struck by poison.</br> While looking through your backpack you find few solutions but only have time to choose one.";
           let btn=document.createElement("button");
           btn.innerHTML="Drink red vial";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE17(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Bandage and cauterize poison spot";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE17(player), false);
           document.body.appendChild(btn2);
           let btn3=document.createElement("button");
           btn3.innerHTML="Eat something and drink";
           btn3.style.position="absolute";
           btn3.style.top="540px";
           btn3.style.left="50px";
           btn3.style.backgroundImage="url('drewno.png')";
           btn3.setAttribute("id","btn3");
           btn3.addEventListener("click",RE17(player), false);
           document.body.appendChild(btn3);
           break;
           }
           case 18:
           {
           document.getElementById("S1").innerHTML="When you were sleeping someone stole from you your weapons.</br> In order to retrieve them thief left small message to guide you where he left them.";
           let btn=document.createElement("button");
           btn.innerHTML="Follow instruction";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE18(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Follow your gut";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE18(player), false);
           document.body.appendChild(btn2);
           break;
           }
           case 19:
           {
           document.getElementById("S1").innerHTML="You see adorable creature which is hopping around.</br> You also know that slaying it will reward you at local blacksmith with good gear.";
           let btn=document.createElement("button");
           btn.innerHTML="Kill creature";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE19(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Leave creature alone";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE19(player), false);
           document.body.appendChild(btn2);
           break;
           }
           case 20:
           {
           document.getElementById("S1").innerHTML="Guildmaster tells you that he can teach you few tricks to be ahead of someone.</br> However you must leave your equipment here so it will not slow you down or distract you.";
           let btn=document.createElement("button");
           btn.innerHTML="Leave equipment";
           btn.style.position="absolute";
           btn.style.top="460px";
           btn.style.left="50px";
           btn.style.backgroundImage="url('drewno.png')";
           btn.setAttribute("id","btn");
           btn.addEventListener("click",RE20(player), false);
           document.body.appendChild(btn);
           let btn2=document.createElement("button");
           btn2.innerHTML="Say that you rather not";
           btn2.style.position="absolute";
           btn2.style.top="500px";
           btn2.style.left="50px";
           btn2.style.backgroundImage="url('drewno.png')";
           btn2.setAttribute("id","btn2");
           btn2.addEventListener("click",RE20(player), false);
           document.body.appendChild(btn2);
           break;
           }
           }
		