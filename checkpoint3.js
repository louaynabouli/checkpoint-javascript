function Bold(){
    var text = document.getElementById("textarea").style.fontWeight;
    console.log(text)
    if(text=="normal"){
        document.getElementById("textarea").style.fontWeight='bold';
    }
    else{
        document.getElementById("textarea").style.fontWeight='normal';
    }
}
function italic(){
    var text = document.getElementById("textarea").style.fontStyle;
    if(text=="normal"){
        document.getElementById("textarea").style.fontStyle='italic';
    }
    else{
        document.getElementById("textarea").style.fontStyle='normal';
    }
}
function underline(){
    var text=document.getElementById("textarea").style.textDecoration;
    console.log(text)
    if(text=="none"){
        document.getElementById("textarea").style.textDecoration='underline'
    }
    else{
        document.getElementById("textarea").style.textDecoration='none'
    }
}
function change(n){
    var s =document.getElementById('textarea');
    s.style.fontSize = n.value + 'px'
}
function change2    (font){
    document.getElementById("textarea").style.fontFamily=font.value;
}