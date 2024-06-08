const one = document.getElementById("1");
const tow = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");

const img1 = document.querySelector(".imgOne");
const img2 = document.querySelector(".imgTow");
const img3 = document.querySelector(".imgThree");
const img4 = document.querySelector(".imgFour");

const continer = document.querySelectorAll(".continer");

continer.forEach((element, i) => {
  element.addEventListener("click", function () {
    if (i === 0) {
      one.classList.toggle("par");
      if (img1.getAttribute("src") === "./assets/images/icon-plus.svg") {
        img1.setAttribute("src", "./assets/images/icon-minus.svg");
      } else {
        img1.setAttribute("src", "./assets/images/icon-plus.svg");
      }
    } else if (i === 1) {
      tow.classList.toggle("par");
      if (img2.getAttribute("src") === "./assets/images/icon-plus.svg") {
        img2.setAttribute("src", "./assets/images/icon-minus.svg");
      } else {
        img2.setAttribute("src", "./assets/images/icon-plus.svg");
      }
    } else if (i === 2) {
      three.classList.toggle("par");
      if (img3.getAttribute("src") === "./assets/images/icon-plus.svg") {
        img3.setAttribute("src", "./assets/images/icon-minus.svg");
      } else {
        img3.setAttribute("src", "./assets/images/icon-plus.svg");
      }
    } else {
      four.classList.toggle("par");
      if (img4.getAttribute("src") === "./assets/images/icon-plus.svg") {
        img4.setAttribute("src", "./assets/images/icon-minus.svg");
      } else {
        img4.setAttribute("src", "./assets/images/icon-plus.svg");
      }
    }
  });
});



/********************************************************************************************************************************************************************************************************code was */
function adem(m){
  let MC = {
    "A":".-",
    "B":"-...",
    "C":"-.-.",
    "D":"-..",
    "E":".",
    "F":"..-.",
    "G":"--.",
    "H":"....",
    "I":"..",
    "J":".---",
    "K":"-.-",
    "L":".-..",
    "M":"--",
    "N":"-.",
    "O":"---",
    "P":".--.",
    "Q":"--.-",
    "R":".-.",
    "S":"...",
    "T":"-",
    "U":"..-",
    "V":"...-",
    "W":".--",
    "X":"-..-",
    "Y":"-.--",
    "Z":"--..",
    "SOS":"...---...",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "0":"-----",
    ".": '.-.-.-',
    ",": '--..--',
    "?": '..--..',
    "\ ": ".----.",
    '!': '-.-.--', '/' : '-..-.', '(': '-.--.', ')': '-.--.-',
    '&': '.-...', ":" : '---...', ";": '-.-.-.', "=": '-...-', "+": '.-.-.', "-":
    '-....-', "_": '..--.-', '"': '.-..-.', "$": '...-..-', "@" : '.--.-.',
  }


  
  let bilo = m.split(" ")
  console.log(bilo)
  
  let str = "";
  for(let i = 0; i < bilo.length; i++){
    for(let x in MC){
      if(bilo[i] === ""){
        str += " "
      }
      else if(bilo[i] === MC[x])
        str += x
    }
    
  }
  console.log(str.length)
  let sp = str.split(' ')
  console.log(sp)
  let fil = sp.filter(el => el !== "")
  console.log(fil)
  let conect = "";
  for(let i = 0; i < str.length; i++){

  }
}

console.log(adem("      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.- ") );

/*decodeMorse = function(morseCode){
  let MC = {
    A:".-",
    B:"-...",
    C:"-.-.",
    D:"-..",
    E:".",
    F:"..-.",
    G:"--.",
    H:"....",
    J:".---",
    K:"-.-",
    L:".-..",
    M:"--",
    N:"-.",
    O:"---",
    P:".--.",
    Q:"--.-",
    R:".-.",
    S:"...",
    T:"-",
    U:"..-",
    V:"...-",
    W:".--",
    X:"-..-",
    Y:"-.--",
    Z:"--..",
    1:".----",
    2:"..---",
    3:"...--",
    4:"....-",
    5:".....",
    6:"-....",
    7:"--...",
    8:"---..",
    9:"----.",
    0:"-----" 
  }
  
  let arrMc = morseCode.split(" ")
  let str = ""
  for(i = 0; i < arrMc.length; i++){
    for(let x in MC){
      if(arrMc[i] === ""){
        str = " "
      }
      else if(arrMc[i] === MC[x]){
       str = x
     }
    }
  }
  let coll = ""
  let spli = str.split(" ");
  let filt = spli.filter(el => el !== "");
  let forEa = filt.forEach(item => coll += item + " ");
  let slic = coll.slice(0,coll.length-1);
  return slic;
  
}*/