function calculate() {
  var a = parseInt(document.getElementById("mat").value);
  var b = parseInt(document.getElementById("che").value);
  var c = parseInt(document.getElementById("cps").value);
  var d = parseInt(document.getElementById("eln").value);
  var e = parseInt(document.getElementById("eme").value);
  var f = parseInt(document.getElementById("chel").value);
  var g = parseInt(document.getElementById("cpl").value);
  var h = parseInt(document.getElementById("egh").value);
  var i = parseInt(document.getElementById("sfh").value);

  var aa = 3 * marks(a);
  var ab = 3 * marks(b);
  var ac = 3 * marks(c);
  var ad = 3 * marks(d);
  var ae = 3 * marks(e);
  var af = 1 * marks(f);
  var ag = 1 * marks(g);
  var ah = 2 * marks(h);
  var ai = 1 * marks(i);

  var z = ((aa + ab + ac + ad + ae + af + ag + ah + ai) / 200) * 10;

  document.getElementById("res").value = parseFloat(z);
}

function marks(y) {
  if (y >= 90) return 10;
  else if (y <= 89 && y >= 80) return 9;
  else if (y <= 79 && y >= 70) return 8;
  else if (y <= 69 && y >= 60) return 7;
  else if (y <= 59 && y >= 50) return 6;
  else if (y <= 49 && y >= 45) return 5;
  else if (y <= 44 && y >= 40) return 4;
  else return 0;
}

function tot() {
  var a1 = parseFloat(document.getElementById("gpa1").value);
  var b1 = parseFloat(document.getElementById("res").value);
  var c1 = (a1 + b1) / 2;
  document.getElementById("res1").value = parseFloat(c1);
}
