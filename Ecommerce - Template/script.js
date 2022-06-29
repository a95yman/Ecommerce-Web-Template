var wrapper = document.getElementById("wrapper");
var width;
function init(){
    width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
    if(width > screen.width)
        width=screen.width;
    width-=10;
    wrapper.style.width=width+"px";
}
init();
var colors = [];
colors.push("#F4F0FF");
colors.push("#FFF0FF");
colors.push("#FFF0F0");
colors.push("#E4FFDA"); 
colors.push("#ECFFC8");
colors.push("#FFECDA");
colors.push("#FBFFDA"); 
colors.push("#EDF4FF");
colors.push("#F4EDFF");

var card1list = document.getElementsByClassName("card1");
for(var i=0; i<card1list.length; i++){
    var rnd = Math.floor(Math.random() * colors.length);
    
    card1list[i].style.background=colors[rnd];
}
var horizontal_scrolls = document.getElementsByClassName("horizontal-scroll");
for(var i=0;i<horizontal_scrolls.length;i++){
    var el = horizontal_scrolls[i];
    Do(el);
}
function Do(el){
    var c = 100;
    setInterval(function(){
        el.scrollLeft+=c;
        if(Number(el.scrollWidth - el.scrollLeft) <= Number(el.clientWidth))
        {
         el.scrollLeft=0;
        }
    }, 2000);
}
var bgs = document.getElementById("poster").getElementsByTagName("img");
var max=bgs.length;
var bg=0;
setInterval(function(){    
    bg++;
    if(bg==max)
        bg=0;
    for(var i=0;i<max;i++)
        if(i!=bg)
        bgs[i].style.opacity="0";
        bgs[bg].style.opacity="1";
}, 2000);

var  cats = document.querySelector("#browse-cats #different-cats");
var x = window.matchMedia("(max-width: 700px)");
MediaQuery(x);
x.addListener(MediaQuery);
function MediaQuery(x){
    if (x.matches) { 
        
        cats.style.width=window.innerWidth + "px";
  } else {
      cats.style.width="500px";
  }
}
window.addEventListener("resize", function(event){
    init();
    MediaQuery(x);
}, true);