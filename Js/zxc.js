let promien = prompt("podaj promień");
let pole = Math.PI * Math.pow(promien, 2);
alert("pole: " + pole);





Pole(promien);

let a = parseFloat(prompt("Podaj promień koła"));
let h = parseFloat(prompt("Podaj promień koła"));

function ObliczPoleTrojkata(a,h){
  return ((a*h)/2);
}

function PoleTrojkata(){
  let pole = ObliczPoleTrojkata(a,h);
  document.write("Pole trójkąta o boku równym: " + a + "cm<sup>2</sup> i wysokości równej: " + h + "cm<sup>2</sup> równa się: " + pole + "cm<sup>2</sup>");
}

PoleTrojkata(a,h);
