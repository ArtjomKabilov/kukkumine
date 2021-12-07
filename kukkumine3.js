var x=40, y=30, r=24;
var ysamm=1, ykiirendus=0.4;
var t, g; //tahvel, graafiline kontekst
function algus(){

    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 50);
}//joonistab palli
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
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
    g.closePath();
}
function liigu(){
    ysamm=ysamm+ykiirendus;
    y=y+ysamm;
    joonista();
}
function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    var hr=r-0.5;
    x=hx;
    y=hy;
    r=hr;
    ysamm=0;
}