'use strict'
// 1行目に記載している 'use strict' は削除しないでください






const chkKinntai = document.getElementById("chkKinntai");
const chkTennkai = document.getElementById("chkTennkai");
const chkMeru = document.getElementById("chkMeru");
const kannryou = document.getElementById("chkkannryou");
const chkGetumatu = document.getElementById("chkGetumatu");
const chkWellcheck = document.getElementById("chkWellcheck");
const chkGetumatukannryou = document.getElementById("chkGetumatukannryou");




const Hibikinntai = { kinntai: false, tennkai: false, kakuninn: false };

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

    if (Hibikinntai["kinntai"] === true && Hibikinntai["tennkai"] === true && Hibikinntai["kakuninn"] === true) {
        kannryou.innerText = "完了しました！ここをクリックしてください"
    } else {
        kannryou.innerText = "すべて選択してください"
    }
}



const getumatu = { Getumatu: false, wellbe: false }

function getumatusinnsei(evt) {
    getumatu["Getumatu"] = evt.target.checked;
    chkGetumatuok()
}

function wellbeing(evt) {
    getumatu["wellbe"] = evt.target.checked;
    chkGetumatuok()
}

function chkGetumatuok() {

    if (getumatu["Getumatu"] === true && getumatu["wellbe"] === true) {
        chkGetumatukannryou.innerText = "完了しました！ここをクリックしてください"
    } else {
        chkGetumatukannryou.innerText = "すべて選択してください"
    }
}




chkKinntai.addEventListener("click", hibiKinntai);
chkTennkai.addEventListener("click", hibitennkai);
chkMeru.addEventListener("click", hibimeru);
chkGetumatu.addEventListener("click", getumatusinnsei);
chkWellcheck.addEventListener("click", wellbeing);
chkGetumatukannryou.addEventListener("click", chkGetumatuok);







function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function displaySelectedValue() {
    const selectElement = document.getElementById("mySelect");
    const selectElement2 = document.getElementById("mySelect2");
    const selectElement3 = document.getElementById("mySelect3");
    const selectElement4 = document.getElementById("mySelect4");
    const selectElement5 = document.getElementById("mySelect5");
    const selectElement6 = document.getElementById("mySelect6");
    const selectElement7 = document.getElementById("mySelect7");
    const selectElement8 = document.getElementById("mySelect8");
    const selectElement9 = document.getElementById("mySelect9");
    const selectElement10 = document.getElementById("mySelect10");

    const selectedValue = selectElement.value;
    const selectedValue2 = selectElement2.value;
    const selectedValue3 = selectElement3.value;
    const selectedValue4 = selectElement4.value;
    const selectedValue5 = selectElement5.value;
    const selectedValue6 = selectElement6.value;
    const selectedValue7 = selectElement7.value;
    const selectedValue8 = selectElement8.value;
    const selectedValue9 = selectElement9.value;
    const selectedValue10 = selectElement10.value;

    const selectedText = selectElement.options[selectElement.selectedIndex].text;
    const selectedText2 = selectElement2.options[selectElement2.selectedIndex].text;
    const selectedText3 = selectElement3.options[selectElement3.selectedIndex].text;
    const selectedText4 = selectElement4.options[selectElement4.selectedIndex].text;
    const selectedText5 = selectElement5.options[selectElement5.selectedIndex].text;
    const selectedText6 = selectElement6.options[selectElement6.selectedIndex].text;
    const selectedText7 = selectElement7.options[selectElement7.selectedIndex].text;
    const selectedText8 = selectElement8.options[selectElement8.selectedIndex].text;
    const selectedText9 = selectElement9.options[selectElement9.selectedIndex].text;
    const selectedText10 = selectElement10.options[selectElement10.selectedIndex].text;

    const displayElement = document.getElementById("selectedValue");
    const displayElement2 = document.getElementById("selectedValue2");
    const displayElement3 = document.getElementById("selectedValue3");
    const displayElement4 = document.getElementById("selectedValue4");
    const displayElement5 = document.getElementById("selectedValue5");
    const displayElement6 = document.getElementById("selectedValue6");
    const displayElement7 = document.getElementById("selectedValue7");
    const displayElement8 = document.getElementById("selectedValue8");
    const displayElement9 = document.getElementById("selectedValue9");
    const displayElement10 = document.getElementById("selectedValue10");


    displayElement.textContent = ` ${selectedText}`;
    displayElement2.textContent = `${selectedText2}`;
    displayElement3.textContent = ` ${selectedText3}`;
    displayElement4.textContent = ` ${selectedText4}`;
    displayElement5.textContent = ` ${selectedText5}`;
    displayElement6.textContent = ` ${selectedText6}`;
    displayElement7.textContent = ` ${selectedText7}`;
    displayElement8.textContent = ` ${selectedText8}`;
    displayElement9.textContent = ` ${selectedText9}`;
    displayElement10.textContent = ` ${selectedText10}`;

}










const date = new Date();
const today = date.getDate();
const currentMonth = date.getMonth();

function createCalendar(month) {
    const monthDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let calendarHTML = '<table class="calendar"><thead><tr>';

    for (let i = 0; i < 7; i++) {
        if (i === 0) {
            calendarHTML += `<th class="sun">${monthDays[i]}</th>`;
        } else if (i === 6) {
            calendarHTML += `<th class="sat">${monthDays[i]}</th>`;
        } else {
            calendarHTML += `<th>${monthDays[i]}</th>`;
        }
    }

    calendarHTML += '</tr></thead><tbody>';

    const daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
    const firstDay = new Date(date.getFullYear(), month, 1).getDay();

    const daysInPrevMonth = new Date(date.getFullYear(), month, 0).getDate();

    let dayCount = 1;
    let prevDayCount = daysInPrevMonth - firstDay + 1;

    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                calendarHTML += `<td class="mute">${prevDayCount}</td>`;
                prevDayCount++;
            } else if (dayCount > daysInMonth) {
                let nextMonthDayCount = dayCount - daysInMonth;
                calendarHTML += `<td class="mute">${nextMonthDayCount}</td>`;
                dayCount++;
            } else {
                // 今日の日付にclassを付ける
                if (dayCount === today && month === currentMonth) {
                    calendarHTML += `<td class="today">${dayCount}</td>`;
                }
                // 月曜日にclassを付ける
                else if (j === 1) {
                    calendarHTML += `<td class="off">${dayCount}</td>`;
                } else {
                    calendarHTML += `<td>${dayCount}</td>`;
                }
                dayCount++;
            }
        }

        calendarHTML += '</tr>';

        if (dayCount - daysInMonth > 7) {
            break;
        }
    }

    calendarHTML += '</tbody></table>';

    return calendarHTML;
}

document.getElementById('calendar').innerHTML = createCalendar(currentMonth) + createCalendar(currentMonth + 1);



