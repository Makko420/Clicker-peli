var currentCookies = 0;
var cpc = 1;
var upgradeCost1 = 10;


function getCookie() {
    currentCookies += cpc;   
}

function buyUpgrade1() {
    if (currentCookies >= upgradeCost1) {
        currentCookies -= upgradeCost1;
        cpc += 1;
        upgradeCost1 += 13;
    }
}

function game() {
    document.getElementById("CPC").innerHTML = "+" + cpc + " Cookie(s)";
    document.getElementById("cost1").innerHTML = "Cost: " + upgradeCost1 + "c";
    document.getElementById("cookies").innerHTML = currentCookies;
}