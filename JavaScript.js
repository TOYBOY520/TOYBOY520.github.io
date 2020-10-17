function welcome()    //1、打看网页显示欢迎
{
 window.alert("我想让全世界知道你是我这一生的失望。\你懂吗？");
}


function imageChange0()  //2、改变menu下图片
{
element=document.getElementById('myimage2')
if (element.src.match("img04"))
  {
   element.src="images/img13.jpg";
  }
 else
 {
  element.src="images/img04.gif";
 }
}


function imageChange1()  //3、改变图片
{
element=document.getElementById('myimage1')
if (element.src.match("img06"))
  {
   element.src="images/img09.jpg";
  }
 else
 {
  element.src="images/img06.jpg";
 }
}

function timeDisplay()   //4、显示当地时间
{
   document.getElementById("date").innerHTML=Date();
}

function getValue()
{ 
var box1=document.getElementById("message");
var box2=document.getElementById("receive");
box2.innerHTML=box2.value+box1.value;
box2.value=box2.innerHTML;
box1.value=null;
}

function informationSend(){

}