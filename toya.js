window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

$(window).scroll(function(){
  $("#header").css("opacity", 1 - $(window).scrollTop() / 250);
});

$(window).scroll(function(){
  $("#welcome").css("opacity", 1 - $(window).scrollTop() / 250);
});



function change(){
  document.getElementById('brick').style.display="block";
  document.getElementById('brick2').style.display="none";
  document.getElementById('brick3').style.display="none";
  document.getElementById('brick4').style.display="none";
  document.getElementById('container').style.display="block";

}
function change2(){
  document.getElementById('brick').style.display="none";
  document.getElementById('brick2').style.display="block";
  document.getElementById('brick3').style.display="none";
  document.getElementById('brick4').style.display="none";
  document.getElementById('container').style.display="block";
}
function change3(){
  document.getElementById('brick').style.display="none";
  document.getElementById('brick2').style.display="none";
  document.getElementById('brick3').style.display="block";
  document.getElementById('brick4').style.display="none";
  document.getElementById('container').style.display="block";
}
function change4(){
  document.getElementById('brick').style.display="none";
  document.getElementById('brick2').style.display="none";
  document.getElementById('brick3').style.display="none";
  document.getElementById('brick4').style.display="block";
  document.getElementById('container').style.display="block";
}

function colorswitch(){
  var button1=document.getElementById('tab1');
}

if (screen.width < 960) {
  document.getElementById('logo').style.width=50+"%";
  document.getElementById('logo').style.minHeight=20+'%'; 
}
else if(screen.width > 960){
  document.getElementById('logo').style.width=21+"%";
  }


if (change()==false){
    document.querySelector('body').style.height=100+"vh";
    document.querySelector('footer').style.bottom=-100+"vh";
}


function sizeTwo(){}
if(screen.height=770+"px"){
  document.getElementById('welcome').style.fontSize=24+"px"
};