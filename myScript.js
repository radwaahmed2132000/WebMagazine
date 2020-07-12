function OpenURl(value)
{
    location.href=value;
}
const body1=document.getElementById("bodycolor");
const nav_bar=document.getElementById("nav_bar2");
const button1=document.getElementById("but1");
const button2=document.getElementById("but2");
const button3=document.getElementById("but3");

const func=()=>
{ 

  if(body1.style.backgroundColor=="rgb(34, 33, 33)")
  {
    body1.style.backgroundColor="white";
    nav_bar.style.backgroundColor="white";
    body1.style.color="black";
    nav_bar.style.color="black";
    button1.style.backgroundColor="black";
    button1.style.color="white";
    button2.style.backgroundColor="black";
    button2.style.color="white";
    button3.style.backgroundColor="black";
    button3.style.color="white";
    button3.value="WHITE MODE";
    
    
    

  }
  else{
    body1.style.backgroundColor="rgb(34, 33, 33)";
    nav_bar.style.backgroundColor="rgb(34, 33, 33)";
    body1.style.color="white";
    nav_bar.style.color="white";
    button1.style.backgroundColor="white";
    button1.style.color="black";
    button2.style.backgroundColor="white";
    button2.style.color="black";
    button3.style.backgroundColor="white";
    button3.style.color="black";
    button3.value="DARK MODE";
    
  }
}