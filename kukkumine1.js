var x=40, y=30, r=24, ysamm=1;
var t, g, a, b; //tahvel, graafiline kontekst
//liigutab palli liigu() funktiooniga
// 100 - tähendab 10 korda sekundis
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
// kukkumine alla (x,y)
function liigu(){
    y=y+ysamm;
    joonista();
}
