'use strict'
// 1行目に記載している 'use strict' は削除しないでください











const hennkou = document.getElementById("hennkou");
let tennkaijikou = document.getElementById("tennkaijikou");
let grobaltennkai = "";

function hennkoujikkou() {
    let nyuuryoku = document.getElementById("nyuuryoku");
    grobaltennkai += "・" + nyuuryoku.value + "<br>";
    tennkaijikou.innerHTML = grobaltennkai;
    nyuuryoku.value = "";
    localStorage.setItem('infotennkai', grobaltennkai);
}

const allclear = document.getElementById("allclear");


function allcleare() {
    grobaltennkai = "";
    tennkaijikou.innerHTML = "";
    localStorage.removeItem('infotennkai');
}

function loadstlege() {
    if (localStorage.getItem(`infotennkai`) !== null) {
        grobaltennkai = localStorage.getItem(`infotennkai`);
        tennkaijikou.innerHTML = grobaltennkai;
    }
}

loadstlege();

hennkou.addEventListener("click", hennkoujikkou)

allclear.addEventListener("click", allcleare)






