const pre = document.querySelector(".dec")
const nxt = document.querySelector(".inc")
const resets = document.querySelector(".reset")

let count = document.querySelector(".countk");
let counts=0;
pre.addEventListener("click",decrease);
nxt.addEventListener("click",increase);
resets.addEventListener("click",reset);
function increase()
{
    counts++;
    count.innerHTML= counts;
  
    if(counts >0)
    {
        count.style.color="green";
    }
    if(counts ==0)
    {
        count.style.color="white";
    }
    
    

}
function decrease()
{
    counts--;
    count.innerHTML= counts;
    if(counts <0)
    {
        count.style.color="red";
    }
    if(counts ==0)
    {
        count.style.color="white";
    }
}
function reset()
{
    counts=0;
    count.innerHTML= counts;
    count.style.color="white";
}
const ss=document.querySelector(".ff");
const aa=document.querySelector("body");
var colors=["green","red","orange","yellow","violet","blue"];
aa.style.background="red";
ss.addEventListener("click",addcolor);
function addcolor()
{
 
    var color=parseInt(Math.random()*colors.length);
    aa.style.background=colors[color];

}
