const sharpness2 = document.getElementById("sword1text");
const health = document.getElementById("hp");
const armor2 = document.getElementById("armor2");
const koupenychHp = document.getElementById("koupenychHp");
let koupenychHp2 = 5;
let ostrost = 1;
let money = 1;
let ostrostCena = 10;
let brneniCena = 30;
let hp1 = 20;
let loadmoney= 1;
const moneyText = document.getElementById("money");
const swordCenaText = document.getElementById("swordCenaText");
const sharpnessimg = document.getElementById("sharpnessimg");
window.onload = () => {
  if (money == 1) { loadmoney = parseInt(localStorage.getItem("money"))
    localStorage.setItem("loadHp", hp1);
    localStorage.setItem("ostrostCena", ostrostCena);
    localStorage.setItem("money", money);
    localStorage.setItem("sword1", ostrost);
    localStorage.setItem("koupenychHp2", koupenychHp2);
  }
  let loadsword = parseInt(localStorage.getItem("sword1"));
  let loadprice = parseInt(localStorage.getItem("ostrostCena"));
  let loadHp = parseInt(localStorage.getItem("loadHp"));
  let loadKoupenychHp = parseInt(localStorage.getItem("koupenychHp2"));
  koupenychHp2 = loadKoupenychHp;
  hp1 = loadHp;
  health.innerText = hp1;
  koupenychHp.innerHTML = `Počet koupených hp: ${koupenychHp2}`;
  console.log(hp1);
  if (loadmoney > 0 || loadsword > 0) {
    ostrostCena = loadprice;
    money = loadmoney;
    moneyText.innerText = "Emeraldy: " + money;
    console.log(loadsword);
    ostrost = loadsword;
    sharpness2.innerHTML = ostrost;
    ostrostCena += ostrost * 2;
    swordCenaText.innerText = ostrostCena;
  }
};
sharpnessimg.onclick = () => {
  if (money >= ostrostCena) {
    money -= ostrostCena;
    ostrost++;
    ostrostCena += ostrost * 2; // cena koupi ostrosti
    sharpness2.innerText = ostrost;
    moneyText.innerText = "Emeraldy: " + money;
    localStorage.setItem("sword1", ostrost);
    localStorage.setItem("money", money);
    swordCenaText.innerText = ostrostCena;
    localStorage.setItem("ostrostCena", ostrostCena);
  }
};
armor2.onclick = () => {
  if (money >= brneniCena) {
    hp1 += 5; // hp se přičtou po 5
    localStorage.setItem("loadHp", hp1);
    localStorage.setItem("loadBrneniCena", brneniCena);
    money -= brneniCena;
    brneniCena += 10;
    moneyText.innerText = "Emeraldy: " + money;
    localStorage.setItem("money", money);
    koupenychHp2 += 5;
    koupenychHp.innerHTML = `Počet koupených hp: ${koupenychHp2}`;
    localStorage.setItem("koupenychHp2", koupenychHp2);
    
  }
};
