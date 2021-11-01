var currentCookies = 0;
var cpc = 5000;
var cps = 0;
var upgradeCost1 = 10;
var upgradeCost2 = 100;
var upgradeCost3 = 750;
var upgradeCost4 = 5000;
var upgradeCost5 = 100000;
var upgradeCost6 = 130;
var clickMulti = 1;
var secMulti = 1;
var upgrade9bought = false;

// clickattava keksi
function getCookie() {
    currentCookies += cpc*clickMulti;   
}


// Päivittää keksin saantia per clikkaus
function buyUpgrade1() {
    if (currentCookies >= upgradeCost1) {
        currentCookies -= upgradeCost1;
        cpc += 1;
        upgradeCost1 += 13;
    }
}

function buyUpgrade6() {
    if (currentCookies >= upgradeCost6) {
        currentCookies -= upgradeCost6;
        cpc += 5;
        upgradeCost1 += 130;
    }
}


// Antaa Tietyn verran keksiä sekunnissa
function buyUpgrade2() {
    if (currentCookies >= upgradeCost2) {
        currentCookies -= upgradeCost2;
        cps += 1;
        upgradeCost2 += 130;
    }
}

function buyUpgrade3() {
    if (currentCookies >= upgradeCost3) {
        currentCookies -= upgradeCost3;
        cps += 5;
        upgradeCost3 += 900;
    }
}

function buyUpgrade4() {
    if (currentCookies >= upgradeCost4) {
        currentCookies -= upgradeCost4;
        cps += 25;
        upgradeCost4 += 6500;
    }
}

function buyUpgrade5() {
    if (currentCookies >= upgradeCost5) {
        currentCookies -= upgradeCost5;
        cps += 99999;
        upgradeCost5 += 1;
    }
}


// Kerran ostettavia päivityksiä
function buyUpgrade7() {
    if (currentCookies >= 5000) {
        currentCookies -= 5000;
        clickMulti += 1;
        document.getElementById("hide1").style.display = 'none'
    }
}
function buyUpgrade8() {
    if (currentCookies >= 10000) {
        currentCookies -= 10000;
        secMulti += 1;
        document.getElementById("hide2").style.display = 'none'
    }
}
function buyUpgrade9() {
    if (currentCookies >= 50000) {
        currentCookies -= 50000;
        upgrade9bought = true;
        document.getElementById("hide3").style.display = 'none'
    }
}


// tämä päivittää numerot joka sekuntti ja aina kun jotain nappia painaa
function game() {
    document.getElementById("CPC").innerHTML = "+" + cpc*clickMulti + " Cookie(s)";
    document.getElementById("CperC").innerHTML = "CPC: " + cpc*clickMulti;
    document.getElementById("CperS").innerHTML = "CPS: " + cps*secMulti;
    document.getElementById("cost1").innerHTML = "Cost: " + upgradeCost1 + "c";
    document.getElementById("cost2").innerHTML = "Cost: " + upgradeCost2 + "c";
    document.getElementById("cost3").innerHTML = "Cost: " + upgradeCost3 + "c";
    document.getElementById("cost4").innerHTML = "Cost: " + upgradeCost4 + "c";
    document.getElementById("cost5").innerHTML = "Cost: " + upgradeCost5 + "c";
    document.getElementById("cost6").innerHTML = "Cost: " + upgradeCost6 + "c";
    document.getElementById("cookies").innerHTML = currentCookies;
}

// antaa random uunin ilmaiseksi joka sekuntti
function getRandomOven() {
    if (upgrade9bought == true) {
        var d = Math.random();
        if (d < 0.5) {
            cps += 1;
        } else if (d < 0.85) {
            cps += 5;
        } else if (d < 0.98) {
            cps += 25;
        }else {
            cps += 99999;
        }
    }
}

setInterval(function(){ 
    currentCookies += cps*secMulti;
    getRandomOven();
    game();
}, 1000);

