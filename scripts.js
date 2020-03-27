var entryRom = document.getElementById("textInput");
var resulText = document.getElementById("result");

function numberDetection() {
  if (entryRom.value.length != 0 && entryRom.value.length <= 4) {
    switch (entryRom.value.toLowerCase()) {
      case "i":case "ii":case "iii":case "iv":case "v":case "vi":case "vii":case "viii":case "ix":case "x":case "xii":case "xiii":case "xiv":case "xv":
        resulText.style.color = "#229954";
        resulText.innerHTML = "Es un número romano dentro del rango [I - XV]"
        break;
      default:
        resulText.style.color = "#C0392B";
        resulText.innerHTML = "No es un número romano dentro del rango [I-XV]"
    }
  } else if(entryRom.value.length >= 4){
    alert("Debe escribir máximo 4 dígitos en el la caja de texto");
    entryRom.focus();
  } else {
    alert("Debe escribir al menos 1 dígito en el la caja de texto");
    entryRom.focus();
  }
}

entryRom.onclick = function () {
  resulText.innerHTML = "";
  entryRom.value = "";
}