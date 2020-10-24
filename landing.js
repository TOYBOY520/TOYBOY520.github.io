function land()
{
var box1=document.getElementById("in1").value;
var box2=document.getElementById("in2").value;
if(box1=="lss" && box2=="123456")
   {
     window.location.href="theme.html";
   }    
else alert("用户名或密码有误!");
}

function reset()
{
  alert("暂时无此功能！");
}