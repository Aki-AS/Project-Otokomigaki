'use strict'
// 1行目に記載している 'use strict' は削除しないでください




const chkKinntai = document.getElementById("chkKinntai");
const chkTennkai = document.getElementById("chkTennkai");
const chkMeru = document.getElementById("chkMeru");
const kannryou = document.getElementById("chkkannryou");


const Hibikinntai = { kinntai: false, tennkai: false, kakuninn: false };

function syokika() {
    if (kannryou.innerText = "選択してください") {
        kannryou.disabled = true
    } else if (kannryou.innerText = "完了しました！ここをクリックしてください") {
        kannryou.disabled = false
    }
}
syokika()

function hibiKinntai(evt) {
    Hibikinntai["kinntai"] = evt.target.checked;
    chkKannryou()
}

function hibitennkai(evt) {
    Hibikinntai["tennkai"] = evt.target.checked;
    chkKannryou()
}

function hibimeru(evt) {
    Hibikinntai["kakuninn"] = evt.target.checked;
    chkKannryou()
}
function chkKannryou() {
    if (kannryou.innerText === "選択してください") {
        kannryou.disabled = true
    }
    if (Hibikinntai["kinntai"] === false || Hibikinntai["tennkai"] === false || Hibikinntai["kakuninn"] === false) {
        kannryou.disabled = true
        kannryou.innerText = "選択してください"
    }
    if (Hibikinntai["kinntai"] === true && Hibikinntai["tennkai"] === true && Hibikinntai["kakuninn"] === true) {
        kannryou.disabled = false
        kannryou.innerText = "完了しました！ここをクリックしてください"
    }
}


const chkGetumatu = document.getElementById("chkGetumatu");
const chkWellcheck = document.getElementById("chkWellcheck");
const Nobotton = document.getElementById("chkGetumatukannryou");
const getumatu = { Getumatu: false, wellbe: false }

function syokika1() {
    if (Nobotton.innerText = "選択してください") {
        Nobotton.disabled = true
    } else if (Nobotton.innerText = "完了しました！ここをクリックしてください") {
        Nobotton.disabled = false
    }
}
syokika1()

function getumatusinnsei(evt) {
    getumatu["Getumatu"] = evt.target.checked;
    chkGetumatuok()
}

function wellbeing(evt) {
    getumatu["wellbe"] = evt.target.checked;
    chkGetumatuok()
}

function chkGetumatuok() {

    if (getumatu["Getumatu"] === false || getumatu["wellbe"] === false) {
        Nobotton.disabled = true
        Nobotton.innerText = "選択してください"
    }
    if (getumatu["Getumatu"] === true && getumatu["wellbe"] === true) {
        Nobotton.disabled = false
        Nobotton.innerText = "完了しました！ここをクリックしてください"
    }
    if (chkGetumatukannryou.innerText === "選択してください") {
        Nobotton.disabled = true
    }
}



chkKinntai.addEventListener("click", hibiKinntai);
chkTennkai.addEventListener("click", hibitennkai);
chkMeru.addEventListener("click", hibimeru);
chkGetumatu.addEventListener("click", getumatusinnsei);
chkWellcheck.addEventListener("click", wellbeing);
chkGetumatukannryou.addEventListener("click", chkGetumatuok);






