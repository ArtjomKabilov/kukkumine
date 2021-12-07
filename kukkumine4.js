var x=40, y=30, r=24;
var ysamm=1, xsamm=0, ykiirendus=0.4;
var t, g, a; //tahvel, graafiline kontekst
function algus(){

    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    a=t.getContext("2d");
    setInterval('liigu()', 50);
}//joonistab palli
function joonista(){
    g.clearRect(0, 0, t.width, t.height);

    a.strokeStyle="green";
    a.fillStyle="green";
    a.beginPath()
    a.fillRect(0,150,300,50);
    a.stroke();
    a.fill();
    a.closePath();


    g.strokeStyle="green";
    g.fillStyle="lightgreen";
    g.beginPath()
    g.arc(x, y, r+5, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();

    g.strokeStyle="red";
    g.fillStyle="red";
    g.beginPath()
    g.arc(x-12, y-10, r-19, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();

    g.strokeStyle="red";
    g.fillStyle="red";
    g.beginPath()
    g.arc(x+12, y-10, r-19, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();


}
function liigu(){
    ysamm=ysamm+ykiirendus;
    if(kasSees(x+xsamm, y+ysamm)){
        y=150;
    } else {
        x=x+xsamm;
        y=y+ysamm;
    }
    joonista();
    if (y==150){
        ysamm=0, xsamm=0, ykiirendus=0;
    }
    if (y==150){

        ysamm=1, xsamm=0, ykiirendus=0.4;
        y=30;
    }
}

function kasSees(uusX, uusY){
    if(uusX-r<0){return false;}
    if(uusX+r>t.width){return false;}
    if(uusY-r<0){return false;}
    if(uusY+r>t.height){return false;}
    if(uusY<149){return false;}
    return true;
}
function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    x=hx;
    y=hy;
    ysamm=0;
}