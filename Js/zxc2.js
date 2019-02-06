
let a = parseFloat(prompt("Podaj długość boku"));
let h = parseFloat(prompt("Podaj wysokość trójkąta"));

function ObliczPoleTrojkata(a,h){
  return ((a*h)/2);
}

function PoleTrojkata(){
  let pole = ObliczPoleTrojkata(a,h);
  document.write("Pole trójkąta o boku równym: " + a + "cm<sup>2</sup> i wysokości równej: " + h + "cm<sup>2</sup> równa się: " + pole + "cm<sup>2</sup>");
}

PoleTrojkata(a,h);
