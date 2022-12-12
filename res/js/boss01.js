const btn = document.getElementById("btn");
const div = document.getElementById("div");
const hp = document.getElementById("hp");
const hp2 = document.getElementById("hp2");
const info = document.getElementById("info");
const moneyText = document.getElementById("money")
let money = 0;
let sharpness = 1;

window.onload = () => {
  let loadmoney = parseInt(localStorage.getItem("money"));
  let loadsword = parseInt(localStorage.getItem("sword1"));
  hp.innerHTML= parseInt(localStorage.getItem("loadHp"));

  if(loadmoney>0 || loadsword>0) {
    money=loadmoney;
    moneyText.innerText = money;
    sharpness=(parseInt(localStorage.getItem("sword1"))+1)
    console.log(sharpness);
  }
}
btn.onmousedown = () => {
    if (hp.innerHTML > 0 && hp2.innerHTML > 0){
        div.style.left = "580px";
        hp2.innerHTML-=(sharpness*2)
      }
  if (hp2.innerHTML <= 0) {
    info.innerText = "Zabil jsi Skeletrona dostáváš 10 emeraldů!"
    money+=10
    moneyText.innerText = money;
    localStorage.setItem ("money", money)
    
    clearInterval(interval);
    btn.style.pointerEvents="none";
  } 
};
btn.onmouseup = () => {
  div.style.left = "0px";
};
const interval = setInterval(() => {
  hp.innerHTML--;
if (hp.innerHTML<=0) {
info.innerHTML = "Zemřel jsi.."
    clearInterval(interval);
}
}, 500);