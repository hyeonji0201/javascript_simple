var Body={
    SetBackgroundColor :function(color){document.querySelector("body").style.backgroundColor=color;},
    SetColor :function(color){document.querySelector("body").style.color=color;},
}
var Link={
    SetColor :function SetColor(color){
        var alist=document.querySelectorAll('a');
        i=0;
        while(i<alist.length){
          alist[i].style.color=color;
          i=i+1;}
        },
}
function NightDayHandler(self){
    if(self.value=='night'){
        Body.SetBackgroundColor('black');
        Body.SetColor('white');
        self.value='day';
        Link.SetColor('powderblue');
        }
    else{
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        self.value='night';
        Link.SetColor('blue');
        }
    }
